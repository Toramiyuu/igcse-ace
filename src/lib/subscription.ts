import { UserProfile } from "@/types";

export function isSubscribed(profile: UserProfile | null): boolean {
  if (!profile) return false;
  return (
    profile.subscription_status === "active" ||
    profile.subscription_status === "trialing"
  );
}

export function isTrialing(profile: UserProfile | null): boolean {
  if (!profile) return false;
  return profile.subscription_status === "trialing";
}

export function trialDaysLeft(profile: UserProfile | null): number {
  if (!profile?.trial_end) return 0;
  const diff = new Date(profile.trial_end).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
