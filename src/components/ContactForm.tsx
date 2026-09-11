"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Ship } from "lucide-react";
import Button from "@/components/Button";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  country: string;
  commodityDivision: string;
  targetVolume: string;
  incoterms: string;
  dischargePort: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const commodityDivisions = [
  "Energy & Refined Petroleum Products",
  "Ferrous & Non-Ferrous Metals",
  "Agricultural Bulk & Soft Commodities",
  "Petrochemicals & Industrial Polymers",
  "Maritime Freight & Bulk Vessel Chartering",
  "General Trade Finance / LC Inquiry",
];

const incotermsOptions = [
  "FOB (Free On Board)",
  "CIF (Cost, Insurance & Freight)",
  "CFR (Cost & Freight)",
  "DAP (Delivered at Place)",
  "EXW (Ex Works)",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    country: "",
    commodityDivision: "",
    targetVolume: "",
    incoterms: "CIF (Cost, Insurance & Freight)",
    dischargePort: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.fullName.trim()) {
      newErrors.fullName = "Contact name is required.";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Corporate email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please provide a valid corporate email address.";
    }

    if (!formState.company.trim()) {
      newErrors.company = "Entity / Company name is required.";
    }

    if (!formState.country.trim()) {
      newErrors.country = "Country of domicile is required.";
    }

    if (!formState.commodityDivision) {
      newErrors.commodityDivision = "Please select the trading desk division.";
    }

    if (!formState.targetVolume.trim()) {
      newErrors.targetVolume = "Please specify approximate cargo volume (e.g., 25,000 MT / bbl).";
    }

    if (!formState.dischargePort.trim()) {
      newErrors.dischargePort = "Discharge or loading port destination is required.";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Please describe the specification or contract requirements.";
    } else if (formState.message.trim().length < 20) {
      newErrors.message = "Please provide at least 20 characters detailing cargo specifications.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const generatedRef = `VVG-${Math.floor(100000 + Math.random() * 900000)}-${formState.country.slice(0, 3).toUpperCase() || "GLB"}`;
    setReferenceId(generatedRef);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormState({
      fullName: "",
      email: "",
      company: "",
      country: "",
      commodityDivision: "",
      targetVolume: "",
      incoterms: "CIF (Cost, Insurance & Freight)",
      dischargePort: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-line-light rounded-lg p-8 md:p-10 shadow-sm text-center space-y-6">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold text-ink-primary tracking-tight">
            Trade Inquiry Transmitted to Trading Desk
          </h3>
          <p className="text-sm text-ink-muted max-w-md mx-auto">
            Thank you, <span className="font-semibold text-ink-primary">{formState.fullName}</span>. Your RFQ has been logged into our physical commodities trading book under reference:
          </p>
          <div className="inline-block px-4 py-1.5 bg-slate-100 font-mono text-sm font-semibold text-navy-900 rounded border border-slate-300 mt-2">
            {referenceId}
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded p-4 max-w-lg mx-auto text-left text-xs text-slate-600 space-y-1">
          <div><strong className="text-ink-primary">Division:</strong> {formState.commodityDivision}</div>
          <div><strong className="text-ink-primary">Volume:</strong> {formState.targetVolume} | <strong className="text-ink-primary">Incoterms:</strong> {formState.incoterms}</div>
          <div><strong className="text-ink-primary">Discharge Port:</strong> {formState.dischargePort}</div>
        </div>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          The corresponding commodity desk director and chartering officer will contact your procurement team within 12 business hours with indicative pricing, laycan availability, and draft Soft Corporate Offer (SCO).
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-blue-hover underline underline-offset-4"
          >
            Submit Another Trade Inquiry / RFQ
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-line-light rounded-lg p-6 sm:p-8 md:p-10 shadow-sm space-y-6"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
          <Ship className="w-3.5 h-3.5" />
          <span>Official Request for Quotation (RFQ)</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-ink-primary tracking-tight">
          Submit Commercial Trade Inquiry
        </h3>
        <p className="text-sm text-ink-muted">
          All physical inquiries are processed under standard GAFTA / LME / Incoterms 2020 international trade conventions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Representative Full Name <span className="text-brand-blue">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formState.fullName}
            onChange={handleChange}
            placeholder="Capt. Alexander Vance"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.fullName ? "border-red-500" : "border-line-light"
            } rounded text-sm text-ink-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Corporate Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Corporate Email <span className="text-brand-blue">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="a.vance@globalprocure.com"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.email ? "border-red-500" : "border-line-light"
            } rounded text-sm text-ink-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Corporate Entity / Trader Name <span className="text-brand-blue">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            placeholder="Vance Petrochemical Holdings Ltd."
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.company ? "border-red-500" : "border-line-light"
            } rounded text-sm text-ink-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent`}
          />
          {errors.company && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.company}
            </p>
          )}
        </div>

        {/* Domicile / Country */}
        <div className="space-y-1.5">
          <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Jurisdiction / Country <span className="text-brand-blue">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formState.country}
            onChange={handleChange}
            placeholder="United Arab Emirates / Singapore"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.country ? "border-red-500" : "border-line-light"
            } rounded text-sm text-ink-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent`}
          />
          {errors.country && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.country}
            </p>
          )}
        </div>
      </div>

      {/* Commodity Desk Selection */}
      <div className="space-y-1.5">
        <label htmlFor="commodityDivision" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Designated Commodity Desk <span className="text-brand-blue">*</span>
        </label>
        <select
          id="commodityDivision"
          name="commodityDivision"
          value={formState.commodityDivision}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 bg-white border ${
            errors.commodityDivision ? "border-red-500" : "border-line-light"
          } rounded text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent`}
        >
          <option value="">-- Select Commodity Division --</option>
          {commodityDivisions.map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>
        {errors.commodityDivision && (
          <p className="text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.commodityDivision}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Target Volume */}
        <div className="space-y-1.5 sm:col-span-1">
          <label htmlFor="targetVolume" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Volume Requirement <span className="text-brand-blue">*</span>
          </label>
          <input
            type="text"
            id="targetVolume"
            name="targetVolume"
            value={formState.targetVolume}
            onChange={handleChange}
            placeholder="e.g. 50,000 MT / Month"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.targetVolume ? "border-red-500" : "border-line-light"
            } rounded text-sm text-ink-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent`}
          />
          {errors.targetVolume && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.targetVolume}
            </p>
          )}
        </div>

        {/* Incoterms */}
        <div className="space-y-1.5 sm:col-span-1">
          <label htmlFor="incoterms" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Preferred Incoterms
          </label>
          <select
            id="incoterms"
            name="incoterms"
            value={formState.incoterms}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-white border border-line-light rounded text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          >
            {incotermsOptions.map((term) => (
              <option key={term} value={term}>
                {term}
              </option>
            ))}
          </select>
        </div>

        {/* Discharge Port */}
        <div className="space-y-1.5 sm:col-span-1">
          <label htmlFor="dischargePort" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Discharge / Loading Port <span className="text-brand-blue">*</span>
          </label>
          <input
            type="text"
            id="dischargePort"
            name="dischargePort"
            value={formState.dischargePort}
            onChange={handleChange}
            placeholder="e.g. Port of Rotterdam / Singapore"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.dischargePort ? "border-red-500" : "border-line-light"
            } rounded text-sm text-ink-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent`}
          />
          {errors.dischargePort && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.dischargePort}
            </p>
          )}
        </div>
      </div>

      {/* Specifications & Trade Terms */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Specifications, Target Laycan & Payment Instrument (DLC/SBLC) <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          placeholder="Specify exact cargo grade, ASTM/ISO standard benchmarks, delivery schedule window, bank confirmation preferences (e.g. Irrevocable Confirmed DLC via top-tier European/GCC bank), and any survey requirements (SGS/Saybolt)..."
          className={`w-full px-4 py-2.5 bg-white border ${
            errors.message ? "border-red-500" : "border-line-light"
          } rounded text-sm text-ink-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent leading-relaxed`}
        />
        {errors.message && (
          <p className="text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          Transmission is secured with end-to-end encryption. All RFQs are subjected to rigorous sanction screenings.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Transmitting RFQ...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Transmit Trade Inquiry
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}