import { createCheckoutSession, getOrCreateStripeCustomer } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const customer = await getOrCreateStripeCustomer(user.email!, user.id);
  const session = await createCheckoutSession(customer.id, user.id);
  return NextResponse.json({ url: session.url });
}
