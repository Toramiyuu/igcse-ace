import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('./index', async (importOriginal) => {
  const mod = await importOriginal<typeof import('./index')>()
  return mod
})

const mockSearch = vi.fn()
const mockCreate = vi.fn()

vi.mock('stripe', () => ({
  default: vi.fn(() => ({
    customers: {
      search: mockSearch,
      create: mockCreate,
    },
    checkout: { sessions: { create: vi.fn() } },
    billingPortal: { sessions: { create: vi.fn() } },
  })),
}))

describe('getOrCreateStripeCustomer', () => {
  beforeEach(() => vi.clearAllMocks())

  it('returns existing customer when found', async () => {
    const existing = { id: 'cus_existing', email: 'test@test.com' }
    mockSearch.mockResolvedValue({ data: [existing] })
    const { getOrCreateStripeCustomer } = await import('./index')
    const result = await getOrCreateStripeCustomer('test@test.com', 'user_123')
    expect(result).toEqual(existing)
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('creates a new customer when none found', async () => {
    const newCustomer = { id: 'cus_new', email: 'new@test.com' }
    mockSearch.mockResolvedValue({ data: [] })
    mockCreate.mockResolvedValue(newCustomer)
    const { getOrCreateStripeCustomer } = await import('./index')
    const result = await getOrCreateStripeCustomer('new@test.com', 'user_456')
    expect(mockCreate).toHaveBeenCalledWith({
      email: 'new@test.com',
      metadata: { userId: 'user_456' },
    })
    expect(result).toEqual(newCustomer)
  })
})
