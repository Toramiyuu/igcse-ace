import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockUpdate = vi.fn().mockReturnThis()
const mockEq = vi.fn().mockResolvedValue({ error: null })
const mockFrom = vi.fn(() => ({ update: mockUpdate }))
mockUpdate.mockReturnValue({ eq: mockEq })

vi.mock('@/lib/supabase/server', () => ({
  createServiceClient: vi.fn(async () => ({ from: mockFrom })),
}))

const mockConstructEvent = vi.fn()
vi.mock('@/lib/stripe', () => ({
  stripe: { webhooks: { constructEvent: mockConstructEvent } },
}))

const mockHeadersGet = vi.fn()
vi.mock('next/headers', () => ({
  headers: vi.fn(async () => ({ get: mockHeadersGet })),
}))

const { POST } = await import('./route')

function makeRequest(body: string, sig: string | null = 'valid-sig') {
  mockHeadersGet.mockReturnValue(sig)
  return new Request('http://localhost/api/stripe/webhook', {
    method: 'POST',
    body,
  })
}

describe('POST /api/stripe/webhook', () => {
  beforeEach(() => vi.clearAllMocks())

  it('returns 400 when stripe-signature header is missing', async () => {
    const res = await POST(makeRequest('{}', null))
    expect(res.status).toBe(400)
  })

  it('returns 400 when signature verification fails', async () => {
    mockConstructEvent.mockImplementation(() => { throw new Error('bad sig') })
    const res = await POST(makeRequest('{}'))
    expect(res.status).toBe(400)
  })

  it('updates user_profiles on checkout.session.completed', async () => {
    mockConstructEvent.mockReturnValue({
      type: 'checkout.session.completed',
      data: { object: { metadata: { userId: 'u1' }, customer: 'cus_1' } },
    })
    const res = await POST(makeRequest('{}'))
    expect(res.status).toBe(200)
    expect(mockFrom).toHaveBeenCalledWith('user_profiles')
    expect(mockUpdate).toHaveBeenCalledWith(expect.objectContaining({
      stripe_customer_id: 'cus_1',
      subscription_status: 'trialing',
    }))
    expect(mockEq).toHaveBeenCalledWith('id', 'u1')
  })

  it('updates subscription_status on customer.subscription.updated', async () => {
    mockConstructEvent.mockReturnValue({
      type: 'customer.subscription.updated',
      data: { object: { status: 'active', trial_end: null, customer: 'cus_1' } },
    })
    const res = await POST(makeRequest('{}'))
    expect(res.status).toBe(200)
    expect(mockUpdate).toHaveBeenCalledWith({ subscription_status: 'active', trial_end: null })
    expect(mockEq).toHaveBeenCalledWith('stripe_customer_id', 'cus_1')
  })

  it('sets canceled on customer.subscription.deleted', async () => {
    mockConstructEvent.mockReturnValue({
      type: 'customer.subscription.deleted',
      data: { object: { customer: 'cus_1' } },
    })
    await POST(makeRequest('{}'))
    expect(mockUpdate).toHaveBeenCalledWith({ subscription_status: 'canceled', trial_end: null })
  })

  it('returns 200 for unhandled event types', async () => {
    mockConstructEvent.mockReturnValue({ type: 'payment_intent.created', data: { object: {} } })
    const res = await POST(makeRequest('{}'))
    expect(res.status).toBe(200)
  })
})
