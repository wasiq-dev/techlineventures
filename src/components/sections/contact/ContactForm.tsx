"use client";

import { useMemo, useState } from "react";
import { RiArrowRightUpLine, RiCheckLine, RiLoader4Line, RiShieldCheckLine, RiSparklingLine, RiTimeLine } from "react-icons/ri";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const trustPoints = [
  { icon: RiTimeLine, label: "Fast response", value: "Within 1 business day" },
  { icon: RiShieldCheckLine, label: "Clear process", value: "Scope, timeline, and quote" },
  { icon: RiSparklingLine, label: "Built for growth", value: "Strategy-led recommendations" },
] as const;

function validate(v: FormState) {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (!v.name.trim()) e.name = "Name is required";
  if (!v.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email";
  if (!v.phone.trim()) e.phone = "Phone is required";
  if (!v.service.trim()) e.service = "Please select a service";
  if (!v.message.trim()) e.message = "Message is required";
  return e;
}

function TextField({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray2">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-[rgba(5,13,31,0.38)] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[rgba(197,213,232,0.38)] ${
          error
            ? "border-red-400/60 focus:border-red-400/60"
            : "border-[rgba(0,229,255,0.12)] focus:border-[rgba(0,229,255,0.38)] focus:bg-[rgba(5,13,31,0.52)]"
        }`}
      />
      {error && <div className="mt-2 text-xs text-red-300">{error}</div>}
    </label>
  );
}

export function ContactForm({ services }: { services: string[] }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const canSubmit = useMemo(() => status !== "loading", [status]);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((s) => {
      if (!s[key]) return s;
      return { ...s, [key]: undefined };
    });
    if (status === "success") setStatus("idle");
  };

  const onSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "ddb0a35d-f858-4397-8d5a-fe7982ceeb2b",
          subject: `New Inquiry from ${form.name}`,
          from_name: form.name,
          to_email: "mwasiqk4@gmail.com",
          ...form,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus("idle");
      alert("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <div className="card overflow-hidden p-0">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-24 bg-[rgba(0,229,255,0.06)] blur-3xl" />
        <form onSubmit={onSubmit} className="relative grid gap-8 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 rounded-3xl border border-[rgba(0,229,255,0.12)] bg-[rgba(8,20,39,0.72)] p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] px-3 py-1 text-xs text-cyan">
                  <RiSparklingLine className="h-4 w-4" />
                  Start your project brief
                </div>
                <div className="mt-4 text-2xl font-[800] tracking-tight text-white sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                  Tell us what you need and we will map the right next step.
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[rgba(197,213,232,0.74)]">
                  Share your goals and selected service. We will reply with a practical scope, timeline, and quote.
                </p>
              </div>
              <div className="min-w-[220px] rounded-3xl border border-[rgba(0,229,255,0.14)] bg-[rgba(255,255,255,0.02)] p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-[rgba(197,213,232,0.5)]">What happens next</div>
                <div className="mt-3 space-y-3 text-sm text-[rgba(197,213,232,0.78)]">
                  {trustPoints.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-[rgba(0,229,255,0.14)] bg-[rgba(0,229,255,0.06)] text-cyan">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-gray2">{label}</div>
                        <div className="mt-1 text-xs text-[rgba(197,213,232,0.62)]">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="Your name"
              value={form.name}
              onChange={(v) => updateField("name", v)}
              error={errors.name}
              placeholder="e.g. Ahmed Khan"
            />
            <TextField
              label="Email address"
              type="email"
              value={form.email}
              onChange={(v) => updateField("email", v)}
              error={errors.email}
              placeholder="you@company.com"
            />
            <TextField
              label="Phone number"
              value={form.phone}
              onChange={(v) => updateField("phone", v)}
              error={errors.phone}
              placeholder="+92 300 1234567"
            />
            <TextField
              label="Company / brand"
              value={form.company}
              onChange={(v) => updateField("company", v)}
              placeholder="Optional"
            />
          </div>

          <div>
            <div className="mb-3 text-sm font-medium text-gray2">Which service do you need?</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => {
                const selected = form.service === service;
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => updateField("service", service)}
                    className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                      selected
                        ? "border-[rgba(0,229,255,0.38)] bg-[rgba(0,229,255,0.10)] text-white"
                        : "border-[rgba(0,229,255,0.12)] bg-[rgba(5,13,31,0.35)] text-[rgba(197,213,232,0.76)] hover:border-[rgba(0,229,255,0.26)] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span>{service}</span>
                      <RiArrowRightUpLine className={`h-4 w-4 ${selected ? "text-cyan" : "text-[rgba(197,213,232,0.42)]"}`} />
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.service && <div className="mt-2 text-xs text-red-300">{errors.service}</div>}
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray2">Project details</span>
            <textarea
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Briefly describe your business, goals, timeline, or any must-have features."
              className={`min-h-40 w-full resize-none rounded-3xl border bg-[rgba(5,13,31,0.38)] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[rgba(197,213,232,0.38)] ${
                errors.message
                  ? "border-red-400/60 focus:border-red-400/60"
                  : "border-[rgba(0,229,255,0.12)] focus:border-[rgba(0,229,255,0.38)] focus:bg-[rgba(5,13,31,0.52)]"
              }`}
            />
            {errors.message && <div className="mt-2 text-xs text-red-300">{errors.message}</div>}
          </label>

          <p className="text-sm text-[rgba(197,213,232,0.74)]">
            Prefer email or WhatsApp follow-up? Mention it in the project details and we will use that channel first.
          </p>
          <div className="flex items-center justify-end gap-3">
            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-cyan">
                <RiCheckLine className="h-5 w-5" />
                Message sent successfully.
              </div>
            )}
            <button
              type="submit"
              disabled={!canSubmit}
              className="btn btn-primary min-w-[180px] justify-center disabled:cursor-not-allowed disabled:opacity-70"
            >
                {status === "loading" ? (
                  <>
                    <RiLoader4Line className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send inquiry
                    <RiArrowRightUpLine className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}
