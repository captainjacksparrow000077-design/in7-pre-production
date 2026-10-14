import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from '@/lib/seo';
import { MessageCircle, FileText, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = buildMetadata({
  title: 'Support Centre: Help, FAQ & Contact',
  description:
    'Get help with IN7India. Find answers to common questions about accounts, payments and bonuses, and see how to contact support through official channels.',
  path: '/support',
  keywords: ['IN7 support', 'IN7 help', 'IN7India contact', 'casino support India'],
});

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Support', path: '/support' },
];

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Use the live chat feature on the IN7 platform for real-time assistance.',
    action: 'Open the app',
    href: '/go',
    label: 'Go to platform',
  },
];

const helpTopics = [
  {
    title: 'Account Registration',
    description: 'Help with creating and verifying your IN7 account.',
    href: '/blog/how-to-get-started-in7',
  },
  {
    title: 'Deposits & Withdrawals',
    description: 'How deposit methods generally work and what to verify.',
    href: '/blog/how-upi-payments-work-in7',
  },
  {
    title: 'Bonuses & Promotions',
    description: 'Understand offer eligibility and how to claim rewards.',
    href: '/promotions',
  },
  {
    title: 'App Safety',
    description: 'A checklist for checking a gaming app before you install it.',
    href: '/blog/gaming-app-safety-checklist',
  },
  {
    title: 'Account Security',
    description: 'Passwords, OTP safety and avoiding phishing scams.',
    href: '/blog/gaming-account-security-guide',
  },
  {
    title: 'Responsible Gaming',
    description: 'Set limits and recognise warning signs.',
    href: '/blog/responsible-gaming-tips',
  },
];

const supportFaqs = [
  {
    question: 'How do I contact IN7 support?',
    answer:
      'Account and payment issues are handled by the operator through its in-app live chat. For questions about the information on this site, use the support channels listed on the platform\u2019s verified website.',
  },
  {
    question: 'I forgot my password. What should I do?',
    answer:
      'Password resets are handled by the operator that hosts your account. Use the "forgot password" option on the platform and verify with the OTP sent to your registered number. This portal cannot reset platform passwords.',
  },
  {
    question: 'A deposit has not been credited. What should I check?',
    answer:
      'Confirm the transaction succeeded in your bank or UPI app, keep the reference number, and contact the operator\u2019s support with those details. Some banks decline gambling-related transfers, which can cause a deposit to fail.',
  },
  {
    question: 'Where can I find the terms for a specific offer?',
    answer:
      'Only the operator sets and publishes the terms for each offer. See our explanation of bonus terms for what to look for, but always confirm the current conditions on the operator\u2019s own promotion page before opting in.',
  },
  {
    question: 'How do I keep my account secure?',
    answer:
      'Use a unique password, never share one-time passwords, and be sceptical of unsolicited messages. Our account security guide and app safety checklist explain this in more detail.',
  },
];

export default function SupportPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(supportFaqs)]} />
      <Navbar />
      <main className="pt-28 pb-16 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-3">Help Centre</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              How can we help you?
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Browse the topics below or reach out directly. We are here to help
              you get the most out of the IN7 platform.
            </p>
          </div>

          {/* Responsible Gaming Notice */}
          <div className="mb-10 p-5 rounded-xl border border-brand-gold/20 bg-brand-gold/5 flex items-start gap-4">
            <HelpCircle size={24} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-white font-semibold text-sm mb-1">Responsible Gaming</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                If you or someone you know is experiencing issues related to gambling,
                please reach out to a professional support organisation in your region.
                Online gambling may be restricted in certain jurisdictions — ensure
                you comply with applicable local laws. See our{' '}
                <Link href="/blog/responsible-gaming-tips" className="text-brand-gold hover:underline">
                  responsible gaming guide
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Contact Options */}
          <section aria-labelledby="contact-heading" className="mb-12">
            <h2 id="contact-heading" className="text-xl font-bold text-white mb-6 tracking-tight">
              Contact us
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {supportOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className="p-6 rounded-xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-gold/20 bg-brand-gold/10 text-brand-gold">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">{option.title}</h3>
                        <p className="text-gray-400 text-xs mb-3 leading-relaxed">{option.description}</p>
                        <a
                          href={option.href}
                          className="text-brand-gold text-xs font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
                          aria-label={option.label}
                        >
                          {option.action} →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Help Topics */}
          <section aria-labelledby="topics-heading" className="mb-12">
            <h2 id="topics-heading" className="text-xl font-bold text-white mb-6 tracking-tight">
              Browse help topics
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {helpTopics.map((topic) => (
                <Link
                  key={topic.title}
                  href={topic.href}
                  className="group p-5 rounded-xl border border-white/10 bg-white/[0.025] hover:border-brand-gold/30 hover:bg-brand-gold/[0.04] transition-colors block"
                >
                  <div className="flex items-start gap-3">
                    <FileText size={16} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-brand-gold transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{topic.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="support-faq-heading" className="mb-12">
            <h2 id="support-faq-heading" className="text-xl font-bold text-white mb-6 tracking-tight">
              Support FAQs
            </h2>
            <div className="space-y-4">
              {supportFaqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ shortcut */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-gray-500 text-sm mb-3">
              Looking for quick answers about the platform?
            </p>
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
            >
              View frequently asked questions →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
