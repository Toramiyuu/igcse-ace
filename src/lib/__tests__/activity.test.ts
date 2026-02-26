import { describe, it, expect, vi, beforeEach } from "vitest";
import { recordActivity } from "@/lib/activity";

describe("recordActivity", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    });
  });

  it("writes to localStorage after call", () => {
    recordActivity();
    expect(localStorage.setItem).toHaveBeenCalledOnce();
  });

  it("stores data under igcse-streak key", () => {
    recordActivity();
    const call = (localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(call[0]).toBe("igcse-streak");
  });

  it("sets actions to 1 when no prior data", () => {
    recordActivity();
    const call = (localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0];
    const written = JSON.parse(call[1]);
    const today = new Date().toISOString().slice(0, 10);
    expect(written[today].actions).toBe(1);
  });

  it("increments actions when called twice", () => {
    const existing = {
      [new Date().toISOString().slice(0, 10)]: { minutes: 0, actions: 3 },
    };
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
      JSON.stringify(existing),
    );

    recordActivity();

    const call = (localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0];
    const written = JSON.parse(call[1]);
    const today = new Date().toISOString().slice(0, 10);
    expect(written[today].actions).toBe(4);
  });

  it("adds minutes when provided", () => {
    recordActivity(25);
    const call = (localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0];
    const written = JSON.parse(call[1]);
    const today = new Date().toISOString().slice(0, 10);
    expect(written[today].minutes).toBe(25);
  });

  it("accumulates minutes across calls", () => {
    const today = new Date().toISOString().slice(0, 10);
    const existing = { [today]: { minutes: 50, actions: 2 } };
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
      JSON.stringify(existing),
    );

    recordActivity(25);

    const call = (localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0];
    const written = JSON.parse(call[1]);
    expect(written[today].minutes).toBe(75);
  });

  it("defaults minutes to 0 when not provided", () => {
    recordActivity();
    const call = (localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0];
    const written = JSON.parse(call[1]);
    const today = new Date().toISOString().slice(0, 10);
    expect(written[today].minutes).toBe(0);
  });

  it("does not throw when localStorage throws", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockImplementation(
      () => { throw new Error("storage error"); },
    );
    expect(() => recordActivity()).not.toThrow();
  });
});
