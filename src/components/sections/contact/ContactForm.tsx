"use client";

import { useMemo, useState } from "react";
import { RiCheckLine, RiLoader4Line } from "react-icons/ri";
import { MagneticButton } from "@/src/components/ui/MagneticButton";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const budgets = ["< 50k PKR", "50k–150k PKR", "150k–400k PKR", "400k+ PKR"] as const;

function validate(v: FormState) {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (!v.name.trim()) e.name = "Name is required";
  if (!v.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email";
  if (!v.phone.trim()) e.phone = "Phone is required";
  if (!v.service.trim()) e.service = "Please select a service";
  if (!v.budget.trim()) e.budget = "Please select a budget range";
  if (!v.message.trim()) e.message = "Message is required";
  return e;
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  const filled = value.length > 0;
  return (
    <div>
      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          className={`w-full rounded-2xl border bg-[rgba(5,13,31,0.35)] px-4 pb-3 pt-6 text-sm outline-none transition ${
            error ? "border-red-400/60" : "border-[rgba(0,229,255,0.14)] focus:border-[rgba(0,229,255,0.40)]"
          }`}
        />
        <label
          className={`pointer-events-none absolute left-4 top-4 text-xs transition ${
            filled ? "text-cyan" : "text-[rgba(197,213,232,0.72)]"
          }`}
        >
          {label}
        </label>
      </div>
      {error && <div className="mt-2 text-xs text-red-300">{error}</div>}
    </div>
  );
}

export function ContactForm({ services }: { services: string[] }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const canSubmit = useMemo(() => status !== "loading", [status]);

  const onSubmit = async () => {
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  return (
    <div className="card p-8 sm:p-10">
      <div className="text-2xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Request a quote
      </div>
      <div className="mt-2 muted text-sm">We’ll get back quickly with the next steps.</div>

      <div className="mt-8 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Name"
            value={form.name}
            onChange={(v) => setForm((s) => ({ ...s, name: v }))}
            error={errors.name}
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => setForm((s) => ({ ...s, email: v }))}
            error={errors.email}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Phone"
            value={form.phone}
            onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
            error={errors.phone}
          />
          <div>
            <div className="relative">
              <select
                value={form.service}
                onChange={(e) => setForm((s) => ({ ...s, service: e.target.value }))}
                className={`w-full appearance-none rounded-2xl border bg-[rgba(5,13,31,0.35)] px-4 pb-3 pt-6 text-sm outline-none transition ${
                  errors.service
                    ? "border-red-400/60"
                    : "border-[rgba(0,229,255,0.14)] focus:border-[rgba(0,229,255,0.40)]"
                }`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <label className={`pointer-events-none absolute left-4 top-4 text-xs transition ${form.service ? "text-cyan" : "text-[rgba(197,213,232,0.72)]"}`}>
                Service
              </label>
            </div>
            {errors.service && <div className="mt-2 text-xs text-red-300">{errors.service}</div>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="relative">
              <select
                value={form.budget}
                onChange={(e) => setForm((s) => ({ ...s, budget: e.target.value }))}
                className={`w-full appearance-none rounded-2xl border bg-[rgba(5,13,31,0.35)] px-4 pb-3 pt-6 text-sm outline-none transition ${
                  errors.budget
                    ? "border-red-400/60"
                    : "border-[rgba(0,229,255,0.14)] focus:border-[rgba(0,229,255,0.40)]"
                }`}
              >
                <option value="" disabled>
                  Select budget
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <label className={`pointer-events-none absolute left-4 top-4 text-xs transition ${form.budget ? "text-cyan" : "text-[rgba(197,213,232,0.72)]"}`}>
                Budget range
              </label>
            </div>
            {errors.budget && <div className="mt-2 text-xs text-red-300">{errors.budget}</div>}
          </div>
          <div />
        </div>

        <div>
          <div className="relative">
            <textarea
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              className={`min-h-[140px] w-full resize-none rounded-2xl border bg-[rgba(5,13,31,0.35)] px-4 pb-3 pt-6 text-sm outline-none transition ${
                errors.message
                  ? "border-red-400/60"
                  : "border-[rgba(0,229,255,0.14)] focus:border-[rgba(0,229,255,0.40)]"
              }`}
            />
            <label className={`pointer-events-none absolute left-4 top-4 text-xs transition ${form.message ? "text-cyan" : "text-[rgba(197,213,232,0.72)]"}`}>
              Message
            </label>
          </div>
          {errors.message && <div className="mt-2 text-xs text-red-300">{errors.message}</div>}
        </div>

        <div className="mt-2">
          {status === "success" ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.18)] bg-[rgba(0,229,255,0.06)] px-4 py-3 text-sm text-gray2">
              <RiCheckLine className="h-5 w-5 text-cyan" />
              Message sent! We’ll reach out shortly.
            </div>
          ) : (
            <MagneticButton
              variant="primary"
              onClick={canSubmit ? onSubmit : undefined}
              className="w-full justify-center"
            >
              {status === "loading" ? (
                <>
                  <RiLoader4Line className="h-5 w-5 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </MagneticButton>
          )}
        </div>
      </div>
    </div>
  );
}

