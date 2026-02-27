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

const input: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: "10px",
  background: "var(--surface2)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

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

  if (screen === "check_email") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "440px", textAlign: "center" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "26px",
              textDecoration: "none",
              color: "var(--text)",
              display: "block",
              marginBottom: "36px",
              letterSpacing: "-0.02em",
            }}
          >
            IGCSE <span style={{ color: "var(--accent)" }}>Ace</span>
          </Link>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "18px",
              padding: "44px 44px",
            }}
          >
            <div style={{ fontSize: "44px", marginBottom: "16px" }}>📬</div>
            <h1
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                marginBottom: "12px",
                color: "var(--text)",
              }}
            >
              Check your email
            </h1>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              We sent a confirmation link to{" "}
              <strong style={{ color: "var(--text)" }}>{email}</strong>.<br />
              Click it to activate your account, then come back to sign in.
            </p>
            <button
              onClick={() => {
                setScreen("form");
                setMode("signin");
                setPassword("");
                setError(null);
              }}
              style={{
                width: "100%",
                background: "var(--accent)",
                border: "none",
                borderRadius: "10px",
                padding: "14px 24px",
                color: "#000",
                fontWeight: 700,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Back to sign in
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "440px", textAlign: "center" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "26px",
            textDecoration: "none",
            color: "var(--text)",
            display: "block",
            marginBottom: "36px",
            letterSpacing: "-0.02em",
          }}
        >
          IGCSE <span style={{ color: "var(--accent)" }}>Ace</span>
        </Link>

        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            padding: "40px 44px",
          }}
        >
          {/* Mode toggle */}
          <div
            style={{
              display: "flex",
              background: "var(--surface2)",
              borderRadius: "10px",
              padding: "4px",
              marginBottom: "28px",
            }}
          >
            {(["signin", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setError(null);
                }}
                style={{
                  flex: 1,
                  padding: "9px 0",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: mode === m ? 600 : 400,
                  background: mode === m ? "var(--surface3)" : "transparent",
                  color: mode === m ? "var(--text)" : "var(--muted)",
                  transition: "all 0.15s ease",
                }}
              >
                {m === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={input}
            />

            {mode === "signup" && (
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  textAlign: "left",
                  marginTop: "-4px",
                  lineHeight: 1.5,
                }}
              >
                Min 8 characters · 1 capital letter · 1 number
              </p>
            )}

            {error && (
              <div
                style={{
                  background: "rgba(240,96,96,0.1)",
                  border: "1px solid rgba(240,96,96,0.3)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  fontSize: "13px",
                  color: "#f06060",
                  textAlign: "left",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: "10px",
                border: "none",
                background: "var(--accent)",
                color: "#000",
                fontWeight: 700,
                fontSize: "15px",
                marginTop: "4px",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                transition: "opacity 0.15s ease",
              }}
            >
              {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: "24px 0",
            }}
          >
            <div
              style={{ flex: 1, height: "1px", background: "var(--border)" }}
            />
            <span style={{ fontSize: "12px", color: "var(--muted)" }}>or</span>
            <div
              style={{ flex: 1, height: "1px", background: "var(--border)" }}
            />
          </div>

          <button
            onClick={signInWithGoogle}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              padding: "13px 20px",
              borderRadius: "10px",
              background: "var(--surface2)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "border-color 0.15s ease",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
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

          <p
            style={{
              color: "var(--muted)",
              fontSize: "12px",
              marginTop: "24px",
              lineHeight: 1.6,
            }}
          >
            By continuing you agree to our terms of service.
          </p>
        </div>
      </div>
    </div>
  );
}
