"use client";

import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiTimeLine } from "react-icons/ri";

export function ContactInfo({
  company,
}: {
  company: { address: string; phone: string; email: string };
}) {
  return (
    <div className="card p-8 sm:p-10">
      <div className="flex items-center justify-between gap-3">
        <div className="text-2xl font-[800] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Contact info
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.18)] bg-[rgba(0,229,255,0.06)] px-3 py-1 text-xs">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[rgba(34,197,94,0.35)] animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          <span className="text-gray2">Always Open</span>
        </div>
      </div>

      <div className="mt-8 grid gap-5 text-sm text-[rgba(197,213,232,0.78)]">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-9 w-9 rounded-xl grid place-items-center border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] text-cyan">
            <RiMapPin2Line className="h-5 w-5" />
          </span>
          <div>
            <div className="text-gray2">Address</div>
            <div className="mt-1 leading-relaxed">{company.address}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-9 w-9 rounded-xl grid place-items-center border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] text-cyan">
            <RiPhoneLine className="h-5 w-5" />
          </span>
          <div>
            <div className="text-gray2">Phone</div>
            <div className="mt-1">{company.phone}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-9 w-9 rounded-xl grid place-items-center border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] text-cyan">
            <RiMailLine className="h-5 w-5" />
          </span>
          <div>
            <div className="text-gray2">Email</div>
            <div className="mt-1">{company.email}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-9 w-9 rounded-xl grid place-items-center border border-[rgba(0,229,255,0.16)] bg-[rgba(0,229,255,0.06)] text-cyan">
            <RiTimeLine className="h-5 w-5" />
          </span>
          <div>
            <div className="text-gray2">Hours</div>
            <div className="mt-1">24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

