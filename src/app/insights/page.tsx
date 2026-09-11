"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { insights, InsightArticle } from "@/data/insights";
import { Clock, ArrowRight, ArrowUpRight, Search, BookOpen } from "lucide-react";

const categories = [
  "All Categories",
  "Maritime Logistics",
  "Trade Finance",
  "Trade Intelligence",
  "Metals & Minerals",
  "Energy & Fuels",
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticle = insights.find((i) => i.featured) || insights[0];

  const filteredArticles = insights.filter((art) => {
    const matchesCategory =
      selectedCategory === "All Categories" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner (Deep Navy) */}
      <section className="bg-navy-900 text-white py-16 lg:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <SectionLabel theme="dark">TRADE INTELLIGENCE &amp; COMMODITY PERSPECTIVES</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Commodity market intelligence, freight analytics, and trade finance.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Our trading desks distill frontline maritime chartering data, LME/CME futures basis trends, and cross-border documentary credit mechanics for commercial buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Spotlight Article (Off-White Background) */}
      <section className="bg-canvas-light py-16 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <SectionLabel theme="light">SPOTLIGHT BRIEFING</SectionLabel>
          </div>

          <Link
            href={`/insights/${featuredArticle.slug}`}
            className="group block bg-white border border-line-light rounded-lg overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-12">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold uppercase tracking-wider text-brand-blue">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors leading-snug tracking-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100 text-xs text-slate-500">
                  <div>
                    <span className="font-medium text-ink-primary block">
                      {featuredArticle.author.name}
                    </span>
                    <span className="text-slate-400">{featuredArticle.author.title}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-brand-blue group-hover:translate-x-1 transition-transform">
                    <span>Read Executive Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden border border-navy-800 bg-navy-950">
                  <Image
                    src="/images/hero-asymmetric-1.svg"
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Main Articles Hub with Search & Category Filter */}
      <section className="bg-white py-16 lg:py-24 border-b border-line-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-200">
            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    selectedCategory === cat
                      ? "bg-navy-900 text-white"
                      : "bg-slate-100 text-ink-muted hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search briefings..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue text-ink-primary placeholder-slate-400"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {filteredArticles.map((art) => (
              <Card
                key={art.slug}
                href={`/insights/${art.slug}`}
                theme="light"
                className="group flex flex-col justify-between h-full bg-canvas-light hover:border-slate-400 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold uppercase tracking-wider text-brand-blue">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink-primary group-hover:text-brand-blue transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div>
                    <span className="font-medium text-ink-primary block">{art.author.name}</span>
                    <span className="text-slate-400">{art.date}</span>
                  </div>
                  <span className="text-brand-blue font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <p className="text-base text-ink-muted">
                No briefings found matching your search or category criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Categories");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold uppercase text-brand-blue hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection
        theme="dark"
        sectionTag="CUSTOM INTELLIGENCE"
        title="Commission dedicated research for your organization."
        subtitle="We produce confidential market studies and peer benchmark analyses tailored to specific strategic questions."
        primaryBtnText="Commission Briefing"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
