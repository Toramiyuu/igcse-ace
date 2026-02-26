"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useState } from "react";

type Mode = "signin" | "signup";
type Screen = "form" | "check_email";

function validate(password: string): string | null {
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Z]/.test(password))
    return "Password must include at least one capital letter.";
  if (!/[0-9]/.test(password))
    return "Password must include at least one number.";
  return null;
}

export default function LoginPage() {
  const supabase = createClient();
  const [mode, setMode] = useState<Mode>("signin");
  const [screen, setScreen] = useState<Screen>("form");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (mode === "signup") {
      const err = validate(password);
      if (err) {
        setError(err);
        return;
      }
    }
    setLoading(true);
    if (mode === "signup") {
      const { error: err } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
      });
      if (err) {
        setError(err.message);
        setLoading(false);
        return;
      }
      setScreen("check_email");
    } else {
      const { error: err } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (err) {
        setError(
          err.message.includes("Invalid login")
            ? "Incorrect email or password."
            : err.message.includes("Email not confirmed")
              ? "Please confirm your email first — check your inbox."
              : err.message,
        );
        setLoading(false);
        return;
      }
      window.location.href = "/dashboard";
    }
    setLoading(false);
  }

  const inputCls =
    "w-full px-[14px] py-[11px] rounded-lg bg-[var(--surface2)] border border-[var(--border)] text-[var(--text)] text-[14px] outline-none box-border";

  if (screen === "check_email") {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-6">
        <div className="w-full max-w-[380px] text-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-syne)] font-extrabold text-[24px] no-underline text-[var(--text)] block mb-10"
          >
            IGCSE <span className="text-[var(--accent)]">Ace</span>
          </Link>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[16px] px-8 py-10">
            <div className="text-[40px] mb-4">📬</div>
            <h1 className="font-[family-name:var(--font-syne)] text-[22px] font-bold mb-2.5">
              Check your email
            </h1>
            <p className="text-[var(--muted)] text-[14px] leading-[1.7] mb-6">
              We sent a confirmation link to{" "}
              <strong className="text-[var(--text)]">{email}</strong>.<br />
              Click it to activate your account, then come back to sign in.
            </p>
            <button
              onClick={() => {
                setScreen("form");
                setMode("signin");
                setPassword("");
                setError(null);
              }}
              className="w-full bg-[var(--accent)] border-0 rounded-lg py-[11px] px-6 text-black font-bold text-[14px] cursor-pointer"
            >
              Back to sign in
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-6">
      <div className="w-full max-w-[380px] text-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] font-extrabold text-[24px] no-underline text-[var(--text)] block mb-10"
        >
          IGCSE <span className="text-[var(--accent)]">Ace</span>
        </Link>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[16px] px-8 py-9">
          {/* Mode toggle */}
          <div className="flex bg-[var(--surface2)] rounded-[10px] p-[3px] mb-7">
            {(["signin", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setError(null);
                }}
                className={`flex-1 py-2 rounded-lg border-0 cursor-pointer text-[13px] transition-all duration-150 ${
                  mode === m
                    ? "bg-[var(--surface3)] text-[var(--text)] font-semibold"
                    : "bg-transparent text-[var(--muted)] font-normal"
                }`}
              >
                {m === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputCls}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={inputCls}
            />

            {mode === "signup" && (
              <p className="text-[11px] text-[var(--muted)] text-left mx-0.5 leading-[1.5]">
                Min 8 characters · 1 capital letter · 1 number
              </p>
            )}

            {error && (
              <div className="bg-[rgba(240,96,96,0.1)] border border-[rgba(240,96,96,0.3)] rounded-lg px-[14px] py-[10px] text-[13px] text-[#f06060] text-left">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-[10px] border-0 bg-[var(--accent)] text-black font-bold text-[15px] mt-1 transition-opacity duration-150"
              style={{
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-[12px] text-[var(--muted)]">or</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 px-5 py-[11px] rounded-[10px] bg-[var(--surface2)] border border-[var(--border)] text-[var(--text)] text-[14px] font-semibold cursor-pointer transition-[border-color] duration-150 hover:border-[var(--accent)]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path
                fill="#4285F4"
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
              />
              <path
                fill="#34A853"
                d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
              />
              <path
                fill="#FBBC05"
                d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
              />
              <path
                fill="#EA4335"
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
              />
            </svg>
            Continue with Google
          </button>

          <p className="text-[var(--muted)] text-[12px] mt-5 leading-[1.6]">
            By continuing you agree to our terms of service.
          </p>
        </div>
      </div>
    </div>
  );
}
