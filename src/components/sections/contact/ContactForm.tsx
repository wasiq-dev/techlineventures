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
      <span className="mb-2 block text-[10px] font-bold text-gray2 uppercase tracking-widest">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition backdrop-blur-md placeholder:text-white/20 ${
          error
            ? "border-red-400/60 focus:border-red-400/60"
            : "border-cyan/10 focus:border-cyan/30 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
        }`}
      />
      {error && <div className="mt-2 text-xs font-bold text-red-500 uppercase">{error}</div>}
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
          to_email: "info@techlineventure.com",
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
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-cyan/10 blur-[120px]" />
      <div className="card relative overflow-hidden rounded-3xl border border-cyan/10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] p-6 sm:p-10 backdrop-blur-md shadow-[0_24px_60px_rgba(0,229,255,0.05)]">
        <form onSubmit={onSubmit} className="grid gap-10">
          {/* Header Section */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-[10px] font-bold text-cyan uppercase tracking-widest">
                <RiSparklingLine className="h-4 w-4" />
                Start your project brief
              </div>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Tell us what you need and we will map the right next step.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray2">
                Share your goals and selected service. We will reply with a practical scope, timeline, and quote.
              </p>
            </div>
            
            <div className="min-w-[240px] rounded-2xl border border-cyan/10 bg-white/5 p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan/60">What happens next</div>
              <div className="mt-4 space-y-4">
                {trustPoints.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/5 text-cyan">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white">{label}</div>
                      <div className="mt-0.5 text-[10px] font-bold text-gray2/40 uppercase tracking-tight">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-cyan/10 to-transparent" />

          {/* Form Fields */}
          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
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
              <div className="mb-4 text-[10px] font-bold text-gray2 uppercase tracking-widest">Which service do you need?</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const selected = form.service === service;
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => updateField("service", service)}
                      className={`rounded-2xl border px-5 py-4 text-left text-[11px] font-bold uppercase tracking-widest transition backdrop-blur-md ${
                        selected
                          ? "border-cyan/40 bg-cyan/10 text-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                          : "border-cyan/10 bg-white/5 text-gray2/50 hover:border-cyan/30 hover:text-cyan"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>{service}</span>
                        <RiArrowRightUpLine className={`h-4 w-4 ${selected ? "text-cyan" : "text-white/20"}`} />
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.service && <div className="mt-2 text-xs font-bold text-red-500 uppercase">{errors.service}</div>}
            </div>

            <label className="block">
              <span className="mb-3 block text-[10px] font-bold text-gray2 uppercase tracking-widest">Project details</span>
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Briefly describe your business, goals, timeline, or any must-have features."
                className={`min-h-40 w-full resize-none rounded-2xl border bg-white/5 px-5 py-4 text-sm text-white outline-none transition backdrop-blur-md placeholder:text-white/20 ${
                  errors.message
                    ? "border-red-400/60 focus:border-red-400/60"
                    : "border-cyan/10 focus:border-cyan/30 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                }`}
              />
              {errors.message && <div className="mt-2 text-xs font-bold text-red-500 uppercase">{errors.message}</div>}
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-xs text-[10px] font-bold text-gray2/40 uppercase leading-relaxed tracking-tight">
              Prefer email or WhatsApp follow-up? Mention it in the project details and we will use that channel first.
            </p>
            <div className="flex items-center gap-6">
              {status === "success" && (
                <div className="flex items-center gap-2 text-[10px] font-bold text-cyan uppercase tracking-widest">
                  <RiCheckLine className="h-5 w-5" />
                  Message sent successfully.
                </div>
              )}
              <button
              disabled={!canSubmit}
              type="submit"
              className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-cyan px-8 text-xs font-black uppercase tracking-[0.2em] text-navy transition-all hover:scale-[1.02] hover:bg-white active:scale-[0.98] disabled:opacity-50"
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
          </div>
        </form>
      </div>
    </div>
  );
}
