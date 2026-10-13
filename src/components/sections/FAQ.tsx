'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How do I register for an IN7 account?",
    a: "Click the 'Download APK' or 'Play Now' button, follow the registration steps on the IN7 platform, and verify your mobile number via OTP to create your account."
  },
  {
    q: "What payment methods are supported?",
    a: "Payment methods and deposit options are managed by the third-party casino operator. Commonly supported methods in India include UPI, IMPS, PhonePe, and Paytm — check the platform directly for current options."
  },
  {
    q: "How fast are withdrawals processed?",
    a: "Withdrawal processing times depend on the third-party casino operator. Check their support section for the current processing times applicable to your account."
  },
  {
    q: "Is the IN7 app safe to download?",
    a: "The APK linked from this site directs to the official IN7 platform. Always download from the official source. If you have security concerns, verify the file with your device's security software before installation."
  },
  {
    q: "How do I claim the welcome bonus?",
    a: "Welcome bonus availability, terms, and eligibility conditions are set by the third-party casino operator. Review the current offer terms on the platform before registering."
  },
  {
    q: "Are the games fair?",
    a: "Games on the IN7 platform are provided by third-party game studios. Check the platform's licensing and certification details for information about RNG testing and fairness audits."
  },
  {
    q: "What games are available on IN7?",
    a: "The IN7 platform features a broad selection of casino-style games including slots, live dealer games, crash games, card games, and more. The exact catalogue is subject to change — visit the Casino Lobby for current availability."
  },
  {
    q: "Is IN7 available in my region?",
    a: "Availability is subject to local laws and regulations. Online gambling may be restricted in certain regions. You are responsible for ensuring that your participation complies with the laws in your jurisdiction before using the platform."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Note: FAQPage JSON-LD is rendered server-side in the parent page.tsx for crawler reliability.
  // This component does not duplicate the schema.

  return (
    <section id="faq" className="py-20 bg-[#0A0A0A] border-t border-white/5" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-3">Support</p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Common questions about IN7 and how the platform works.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-btn-${idx}`;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-red/30' : 'border-white/5'}`}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-inset"
                  >
                    <span className="font-bold text-white pr-4 text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`text-brand-red transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-white/40 leading-5">
          Have more questions?{' '}
          <a href="/support" className="text-brand-gold hover:underline">
            Visit our support page
          </a>
        </p>
      </div>
    </section>
  );
}
