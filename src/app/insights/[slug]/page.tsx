import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { insights } from "@/data/insights";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);

  if (!article) {
    return {
      title: "Briefing Not Found",
    };
  }

  return {
    title: `${article.title} | Vision Vibe Global Insights`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const relatedArticles = insights
    .filter((i) => i.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner (Navy Background) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Briefings</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-accent-gold">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="pt-4 border-t border-navy-800 flex items-center justify-between text-xs text-slate-400">
              <div>
                <span className="text-white font-medium block">{article.author.name}</span>
                <span className="text-slate-400">{article.author.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-navy-800 text-slate-300 rounded border border-navy-700">
                  Executive Briefing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Area (Off-White Canvas) */}
      <section className="bg-canvas-light py-16 lg:py-20 border-b border-line-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-line-light rounded-lg p-6 sm:p-10 lg:p-12 shadow-sm space-y-12">
            {/* Executive Summary Callout */}
            <div className="p-6 sm:p-8 bg-slate-50 border-l-4 border-brand-blue rounded-r-lg space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue block">
                Executive Summary
              </span>
              <p className="text-base text-ink-primary leading-relaxed font-normal">
                {article.content.executiveSummary}
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-6 sm:p-8 bg-navy-950 text-white rounded-lg border border-navy-800 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold block">
                Key Strategic Takeaways
              </span>
              <ul className="space-y-3 text-sm">
                {article.content.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-depth Sections */}
            <div className="space-y-10 pt-4 border-t border-slate-100">
              {article.content.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-primary tracking-tight">
                    {sec.heading}
                  </h2>
                  <p className="text-base text-ink-muted leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Author Credentials Card */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start gap-4 bg-slate-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-navy-900 text-accent-gold flex items-center justify-center font-display text-lg font-extrabold flex-shrink-0">
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Author Profile
                </span>
                <h3 className="font-display text-lg font-bold text-ink-primary">
                  {article.author.name}
                </h3>
                <p className="text-xs text-brand-blue font-medium">
                  {article.author.title}
                </p>
                <p className="text-xs text-ink-muted pt-1">
                  Directs international physical commodity trading desks, chartering allocations, and structured trade finance facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-white py-16 lg:py-20 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <SectionLabel theme="light">FURTHER PERSPECTIVES</SectionLabel>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-primary mt-2 tracking-tight">
              Related Trade &amp; Freight Intelligence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <Card
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                theme="light"
                className="group flex flex-col justify-between h-full bg-canvas-light hover:border-slate-400 transition-all"
              >
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    {rel.category}
                  </span>
                  <h4 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-ink-muted line-clamp-3">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-brand-blue">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Inquiry CTA */}
      <CTASection
        theme="dark"
        sectionTag="COMMERCIAL CONTRACTING"
        title="Discuss physical trade volumes with our trading desk."
        subtitle="Our commodity desk directors and chartering officers are available to review delivery laycans, pricing formulas, and payment instruments."
        primaryBtnText="Submit Commercial RFQ"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
