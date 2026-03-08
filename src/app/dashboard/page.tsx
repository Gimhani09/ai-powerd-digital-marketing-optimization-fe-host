'use client';

import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Aurora from '@/components/Aurora';
import Link from 'next/link';

/* ── 4 Core Components (equal weight) ──────────────────────────────── */
const coreComponents = [
  {
    title: 'Strategy & Calendar',
    tagline: 'Your personalized growth plan',
    description:
      'Get a data-driven marketing strategy tailored to your business, complete with a day-by-day action calendar to keep you on track.',
    features: ['Personalized strategy generation', 'Budget & platform recommendations', 'Day-by-day calendar planner'],
    href: '/dashboard/strategy',
    cta: 'Build Strategy',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Content Generator',
    tagline: 'Create content that converts',
    description:
      'Generate social media posts, ad copy, and marketing content in seconds — perfectly aligned with your brand voice.',
    features: ['Social media captions & posts', 'Ad copy for multiple platforms', 'Multi-language support'],
    href: '/content-generator',
    cta: 'Create Content',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: 'Performance Predictor',
    tagline: 'Know before you spend',
    description:
      'Forecast campaign outcomes, estimate ROI, and optimize your budget allocation — all before you launch.',
    features: ['Campaign outcome forecasting', 'Budget optimization insights', 'Risk & opportunity analysis'],
    href: '/performance-predictor',
    cta: 'Predict Results',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Smart Assistant',
    tagline: 'Your marketing advisor',
    description:
      'Chat with an intelligent assistant that understands your business — get instant answers, ideas, and strategic guidance.',
    features: ['Real-time marketing guidance', 'Context-aware recommendations', 'Natural conversation interface'],
    href: '/smart-assistant',
    cta: 'Start Chat',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

/* ── Utility quick links ───────────────────────────────────────────── */
const quickLinks = [
  {
    title: 'Calendar Planner',
    description: 'View your day-by-day marketing action plan.',
    href: '/dashboard/calendar',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Business Profile',
    description: 'Set up your brand to unlock personalized results.',
    href: '/dashboard/my-business',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Insights & Analytics',
    description: 'Monitor campaign performance and trends.',
    href: '/dashboard/insights',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

/* ── How it works steps ────────────────────────────────────────────── */
const howItWorks = [
  {
    step: '01',
    title: 'Tell us about your business',
    description: 'Share your goals, audience, and budget through a simple guided form.',
  },
  {
    step: '02',
    title: 'Get a tailored strategy',
    description: 'Our engine analyzes your profile and generates a personalized marketing plan.',
  },
  {
    step: '03',
    title: 'Execute with confidence',
    description: 'Follow your calendar plan, create content, and track performance — all from here.',
  },
];

export default function DashboardHome() {
  return (
    <div className="relative min-h-screen bg-[#0B0F14] overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Aurora
          colorStops={["#22C55E", "#1F2933", "#0B0F14"]}
          blend={0.5}
          amplitude={1}
          speed={0.3}
        />
      </div>

      {/* Soft top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#22C55E]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Page Content */}
      <div className="relative z-10 px-6 md:px-10 py-10 max-w-[1400px] mx-auto space-y-20">

        {/* ─── Hero Section ─── */}
        <section className="pt-8 md:pt-14 space-y-5 max-w-2xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#22C55E]/60 font-semibold">
            Dashboard
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#F9FAFB] tracking-tight leading-[1.12]">
            Welcome back
          </h1>
          <p className="text-base text-[#94A3B8] leading-relaxed max-w-lg">
            Your command center for strategy, content, and growth — everything in one place.
          </p>
        </section>

        {/* ─── Core Components (2×2 equal-weight grid) ─── */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-medium text-[#F9FAFB]/80 tracking-wide">Core Tools</h2>
            <div className="flex-1 h-px bg-[#1F2933]/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreComponents.map((comp) => (
              <Link
                key={comp.title}
                href={comp.href}
                className="group relative rounded-2xl border border-[#1F2933]/50 bg-[#0D1117]/60 backdrop-blur-sm p-7 transition-all duration-300 hover:border-[#22C55E]/25 hover:bg-[#22C55E]/[0.02] flex flex-col"
              >
                {/* Arrow */}
                <ArrowUpRightIcon className="absolute top-6 right-6 h-4 w-4 text-[#475569]/30 group-hover:text-[#22C55E]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />

                {/* Icon + Tagline row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#22C55E]/[0.08] flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E]/[0.14] transition-colors duration-300">
                    {comp.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#F9FAFB] group-hover:text-[#22C55E] transition-colors duration-300">
                      {comp.title}
                    </h3>
                    <p className="text-[11px] text-[#22C55E]/50 font-medium">{comp.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-[#94A3B8] mb-5">
                  {comp.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {comp.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#64748B]">
                      <span className="w-1 h-1 rounded-full bg-[#22C55E]/40 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA hint */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#22C55E]/60 group-hover:text-[#22C55E] transition-colors duration-300">
                  {comp.cta}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Quick Links (utility) ─── */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-medium text-[#F9FAFB]/80 tracking-wide">Quick Links</h2>
            <div className="flex-1 h-px bg-[#1F2933]/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-center gap-4 rounded-2xl border border-[#1F2933]/40 bg-[#0D1117]/40 backdrop-blur-sm p-5 transition-all duration-300 hover:border-[#22C55E]/20 hover:bg-[#22C55E]/[0.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22C55E]/[0.06] flex items-center justify-center text-[#22C55E]/60 group-hover:bg-[#22C55E]/[0.10] group-hover:text-[#22C55E] transition-colors duration-300 shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-[#F9FAFB] group-hover:text-[#22C55E] transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-medium text-[#F9FAFB]/80 tracking-wide">How It Works</h2>
            <div className="flex-1 h-px bg-[#1F2933]/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative space-y-3">
                <span className="text-3xl font-bold text-[#22C55E]/[0.12]">{item.step}</span>
                <h3 className="text-sm font-semibold text-[#F9FAFB]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#64748B]">{item.description}</p>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-5 -right-3 w-6 h-px bg-[#1F2933]/40" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section className="rounded-2xl border border-[#1F2933]/40 bg-gradient-to-r from-[#22C55E]/[0.04] via-transparent to-transparent p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#F9FAFB]">Ready to grow?</p>
            <p className="text-xs text-[#64748B]">
              Complete your business profile to get personalised strategies and insights.
            </p>
          </div>
          <Link
            href="/dashboard/my-business"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22C55E] text-[#0B0F14] text-sm font-semibold hover:bg-[#16A34A] transition-colors duration-200"
          >
            Set Up Profile
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </section>
      </div>
    </div>
  );
}

