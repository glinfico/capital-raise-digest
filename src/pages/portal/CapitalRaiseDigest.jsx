import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Newspaper, ShieldCheck, Zap, ArrowRight, Activity, Globe } from "lucide-react";

export default function CapitalRaiseDigest() {
  const [selectedEdition, setSelectedEdition] = useState("today");

  const editions = [
    {
      id: "today",
      date: "Sample Edition",
      headline: "How to Evaluate a Capital-Raising Opportunity: Five Questions for Founders",
      category: "Fundraising Strategy",
      readTime: "4 min read",
      author: "Capital Raise Digest Editorial",
      summary: "A practical framework for assessing funding fit, capital structure, investor alignment, diligence readiness, and the true cost of capital."
    },
    {
      id: "yesterday",
      date: "Research Guide",
      headline: "Private Credit, Bank Debt, and Equity: Understanding the Trade-Offs",
      category: "Capital Markets Education",
      readTime: "6 min read",
      author: "Capital Raise Digest Editorial",
      summary: "Compare financing routes by repayment obligations, dilution, covenants, timing, collateral, and the level of disclosure expected."
    },
    {
      id: "archive-1",
      date: "Deal Preparation",
      headline: "Building a Diligence-Ready Data Room Before Approaching Investors",
      category: "Deal Readiness",
      readTime: "5 min read",
      author: "Capital Raise Digest Editorial",
      summary: "Organize financial statements, ownership records, operating metrics, legal documents, and use-of-funds assumptions before outreach."
    }
  ];

  const activeContent = editions.find(e => e.id === selectedEdition) || editions[0];

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Capital Raise Digest masthead */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg aria-label="Capital Raise Digest gold star logo" role="img" width="42" height="42" viewBox="0 0 64 64" fill="none" className="shrink-0">
                <rect width="64" height="64" rx="13" fill="#24180f" />
                <path d="M32 5 38.6 24.1 59 24.5 42.7 36.8 48.6 56 32 44.2 15.4 56 21.3 36.8 5 24.5 25.4 24.1Z" fill="#c7a35b" stroke="#e5d2a0" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-xs font-mono uppercase tracking-widest">
                crd.glinfico.com • Capital Raise Digest
              </Badge>
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-tight">Executive Capital Intelligence</h1>
            <p className="text-slate-400 text-xs mt-1">Capital-markets coverage, fundraising themes, and deal intelligence. Verify source data before relying on any figures.</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Independent Capital Markets Publication</span>
          </div>
        </div>

        {/* Featured Article Layout */}
        <Card className="bg-[#0f0f1e] border-white/10 text-white p-8 md:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-0 text-xs font-mono">
              {activeContent.category}
            </Badge>
            <span className="text-xs text-slate-400 font-mono">{activeContent.date}</span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400">{activeContent.readTime}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            {activeContent.headline}
          </h2>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed border-l-2 border-amber-500 pl-4 py-1 italic">
            "{activeContent.summary}"
          </p>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Activity className="h-4 w-4" /> Editor's Note — Publication Preview
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              This is an editorial demonstration, not breaking news or verified market reporting. Published market claims should include a named, checkable source and publication date.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 uppercase block">Funding Fit</span>
                <strong className="text-emerald-400 text-sm font-semibold">Purpose & Eligibility</strong>
              </div>
              <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 uppercase block">Capital Structure</span>
                <strong className="text-blue-400 text-sm font-semibold">Debt, Equity & Hybrid</strong>
              </div>
              <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] text-slate-400 uppercase block">Preparation</span>
                <strong className="text-amber-400 text-sm font-semibold">Diligence Readiness</strong>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs text-slate-400">
            <span>Authored by: <strong className="text-white">{activeContent.author}</strong></span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              Educational Preview <ShieldCheck className="h-4 w-4" />
            </span>
          </div>
        </Card>

        {/* Editorial preview topic selector */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Editorial Preview Topics</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {editions.map(ed => (
              <Card
                key={ed.id}
                onClick={() => setSelectedEdition(ed.id)}
                className={`p-5 cursor-pointer transition-all border ${
                  selectedEdition === ed.id 
                    ? "bg-amber-500/10 border-amber-500/50 shadow-lg" 
                    : "bg-[#0f0f1e] border-white/10 hover:border-white/20"
                }`}
              >
                <span className="text-[10px] font-mono text-amber-400 block mb-1">{ed.date}</span>
                <h4 className="font-bold text-xs line-clamp-2 text-white mb-2">{ed.headline}</h4>
                <span className="text-[10px] text-slate-400">{ed.readTime} • {ed.category}</span>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
