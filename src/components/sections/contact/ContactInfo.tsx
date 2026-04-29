"use client";

import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiTimeLine } from "react-icons/ri";

export function ContactInfo({
  company,
}: {
  company: { address: string; email: string };
}) {
  return (
    <div className="card p-8 sm:p-10 bg-gradient-to-br from-cyan/[0.02] to-blue-50/[0.02] backdrop-blur-md border border-cyan/10 shadow-[0_24px_60px_rgba(0,229,255,0.05)]">
      <div className="flex items-center justify-between gap-3">
        <div className="text-2xl font-[800] tracking-tight text-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          Contact info
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-xs">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan/30 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
          </span>
          <span className="text-gray2/60 font-bold uppercase tracking-widest">Always Open</span>
        </div>
      </div>

      <div className="mt-8 grid gap-5 text-sm text-gray2">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-9 w-9 rounded-xl grid place-items-center border border-cyan/20 bg-cyan/5 text-cyan">
            <RiMapPin2Line className="h-5 w-5" />
          </span>
          <div>
            <div className="text-gray2/50 font-bold uppercase tracking-widest text-[10px]">Address</div>
            <div className="mt-1 leading-relaxed font-medium text-white">{company.address}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-9 w-9 rounded-xl grid place-items-center border border-cyan/20 bg-cyan/5 text-cyan">
            <RiMailLine className="h-5 w-5" />
          </span>
          <div>
            <div className="text-gray2/50 font-bold uppercase tracking-widest text-[10px]">Email</div>
            <div className="mt-1 font-medium text-white">{company.email}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-9 w-9 rounded-xl grid place-items-center border border-cyan/20 bg-cyan/5 text-cyan">
            <RiTimeLine className="h-5 w-5" />
          </span>
          <div>
            <div className="text-gray2/50 font-bold uppercase tracking-widest text-[10px]">Hours</div>
            <div className="mt-1 font-medium text-white">24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

