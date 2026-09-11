import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, FileSpreadsheet } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-navy-900 text-white px-4 py-20">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-xl bg-navy-800 border border-slate-700 flex items-center justify-center mx-auto text-brand-blue-light shadow-lg">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-gold">
            Error 404 • Destination Port Not Found
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Off-Route Navigation
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The trading division, document, or cargo parcel you requested could not be located in our commercial manifest.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="secondary" size="md">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Return to Global Overview</span>
          </Button>
          <Button href="/rfq" variant="primary" size="md">
            <FileSpreadsheet className="w-4 h-4 mr-1.5" />
            <span>Submit Commercial RFQ</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
