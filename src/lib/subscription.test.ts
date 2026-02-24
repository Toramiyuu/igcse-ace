import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { isSubscribed, isTrialing, trialDaysLeft } from './subscription'
import type { UserProfile } from '@/types'

const base: UserProfile = {
  id: 'u1', subjects: [], session_year: 2026, zone: 4,
  stripe_customer_id: null, subscription_status: null,
  trial_end: null, created_at: '2026-01-01',
}

describe('isSubscribed', () => {
  it('returns true for active', () =>
    expect(isSubscribed({ ...base, subscription_status: 'active' })).toBe(true))
  it('returns true for trialing', () =>
    expect(isSubscribed({ ...base, subscription_status: 'trialing' })).toBe(true))
  it('returns false for canceled', () =>
    expect(isSubscribed({ ...base, subscription_status: 'canceled' })).toBe(false))
  it('returns false for null profile', () =>
    expect(isSubscribed(null)).toBe(false))
})

describe('isTrialing', () => {
  it('returns true only for trialing', () =>
    expect(isTrialing({ ...base, subscription_status: 'trialing' })).toBe(true))
  it('returns false for active', () =>
    expect(isTrialing({ ...base, subscription_status: 'active' })).toBe(false))
})

describe('trialDaysLeft', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('returns days remaining until trial_end', () => {
    vi.setSystemTime(new Date('2026-02-24'))
    const profile = { ...base, trial_end: '2026-03-03T00:00:00Z' }
    expect(trialDaysLeft(profile)).toBe(7)
  })

  it('returns 0 when trial has ended', () => {
    vi.setSystemTime(new Date('2026-03-10'))
    const profile = { ...base, trial_end: '2026-03-03T00:00:00Z' }
    expect(trialDaysLeft(profile)).toBe(0)
  })

  it('returns 0 when trial_end is null', () =>
    expect(trialDaysLeft(base)).toBe(0))
})
