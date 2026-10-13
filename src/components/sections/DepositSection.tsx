'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Coins, ArrowRight } from 'lucide-react';

const rewardTiers = [
  { deposit: '₹100+', reward: '+₹37' },
  { deposit: '₹200+', reward: '+₹80', featured: true },
  { deposit: '₹300+', reward: '+₹97' },
  { deposit: '₹500+', reward: '+₹117' },
  { deposit: '₹1,000+', reward: '+₹177' },
];

export default function DepositSection() {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (dontShowAgain) {
    return null;
  }

  return (
    <section
      id="deposit"
      aria-labelledby="deposit-heading"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#090909] px-4 py-14 sm:py-20"
    >
      {/* Restrained background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B5162A]/10 blur-[100px] sm:h-96 sm:w-96"
      />

      <div className="mx-auto w-full max-w-lg">
        {/* Heading */}
        <header className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8B65C]">
            IN7 rewards
          </p>

          <h2
            id="deposit-heading"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
          >
            First deposit bonus
            <span className="mt-1 block text-[#E7C66F]">
              Up to ₹777
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/60 sm:text-base">
            Review the available reward tiers and applicable eligibility
            conditions before participating.
          </p>
        </header>

        {/* Featured offer */}
        <div className="relative overflow-hidden rounded-2xl border border-[#D8B65C]/30 bg-gradient-to-br from-[#21170B] via-[#100D09] to-[#0B0B0B] p-6 text-center sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#D8B65C]/10 blur-3xl"
          />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B65C]/30 bg-[#D8B65C]/10 text-[#E7C66F]">
              <Coins size={24} strokeWidth={1.7} aria-hidden="true" />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Featured promotion
            </p>

            <p className="mt-2 text-4xl font-extrabold tracking-tight text-[#E7C66F] sm:text-5xl">
              +₹777
            </p>

            <p className="mt-3 text-sm text-white/70">
              Check the offer terms for qualifying deposits and reward
              eligibility.
            </p>
          </div>
        </div>

        {/* Reward tiers */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#101010]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
            <h3 className="text-sm font-semibold text-white">
              Reward tiers
            </h3>

            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
              Deposit / Reward
            </span>
          </div>

          <div className="grid grid-cols-[1fr_1fr] border-b border-white/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45 sm:px-5">
            <span>Deposit amount</span>
            <span className="text-right">Reward amount</span>
          </div>

          <ul className="divide-y divide-white/[0.06]">
            {rewardTiers.map((tier) => (
              <li
                key={tier.deposit}
                className={`grid grid-cols-[1fr_1fr] items-center px-4 py-3.5 transition-colors sm:px-5 ${tier.featured
                  ? 'bg-[#B5162A]/[0.09]'
                  : 'hover:bg-white/[0.025]'
                  }`}
              >
                <span className="flex items-center gap-2 text-sm font-medium text-white/85">
                  {tier.deposit}

                  {tier.featured && (
                    <span className="rounded-sm border border-[#D44A55]/40 bg-[#B5162A]/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#F28B93]">
                      Featured
                    </span>
                  )}
                </span>

                <span className="text-right text-sm font-bold tabular-nums text-[#E7C66F]">
                  {tier.reward}
                </span>
              </li>
            ))}
          </ul>

          <p className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-white/45 sm:px-5">
            Rewards are subject to the applicable offer terms. Deposit
            thresholds and reward eligibility should be confirmed before
            participation.
          </p>
        </div>

        {/* Primary action */}
        <div className="mt-7">
          <Link
            href="/go"
            className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#F05A62]/50 bg-[#C91E2B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E02A37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C66F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] motion-reduce:transition-none"
          >
            View offer details
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>

          <p className="mt-3 text-center text-xs leading-5 text-white/40">
            Review the terms and eligibility requirements before proceeding.
          </p>
        </div>

        {/* Dismiss control */}
        <div className="mt-7 flex justify-center">
          <label className="inline-flex cursor-pointer items-center gap-3 rounded-md py-2 text-sm text-white/55 transition-colors hover:text-white/80">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(event) => setDontShowAgain(event.target.checked)}
              className="peer sr-only"
            />

            <span
              aria-hidden="true"
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-white/25 bg-white/[0.03] text-transparent transition-colors peer-checked:border-[#D8B65C] peer-checked:bg-[#D8B65C] peer-checked:text-black peer-focus-visible:ring-2 peer-focus-visible:ring-[#E7C66F] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#090909]"
            >
              <Check size={13} strokeWidth={3} />
            </span>

            <span>Hide this section for now</span>
          </label>
        </div>
      </div>
    </section>
  );
}
