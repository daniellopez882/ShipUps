"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { describeRequest, validateQuote, type QuoteErrors, type QuoteInput } from "@/lib/quote";

export const NOT_CONNECTED =
  "This demo is not connected to a carrier, so no live rate is returned.";

const EMPTY: QuoteInput = { origin: "", destination: "", weight: "" };

/**
 * The three inputs and the "Check Price" button used to do nothing at all.
 * They validate now, and say honestly what a submission does.
 */
const QuoteForm = () => {
  const id = useId();
  const [values, setValues] = useState<QuoteInput>(EMPTY);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [submitted, setSubmitted] = useState<string | null>(null);

  const field = (name: keyof QuoteInput, placeholder: string, type = "text") => (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={`${id}-${name}`} className="sr-only">
        {placeholder}
      </label>
      <Input
        id={`${id}-${name}`}
        name={name}
        type={type}
        inputMode={type === "number" ? "decimal" : undefined}
        placeholder={placeholder}
        className="h-12"
        value={values[name]}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
      />
      {errors[name] && (
        <span id={`${id}-${name}-error`} className="text-sm text-secondary">
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form
      id="quote"
      aria-label="Get a shipping quote"
      noValidate
      className="rounded-xl py-8 px-4 shadow-custom flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        const next = validateQuote(values);
        setErrors(next);
        setSubmitted(Object.keys(next).length === 0 ? describeRequest(values) : null);
      }}
    >
      <div className="flex flex-col md:flex-row gap-5">
        {field("origin", "Origin")}
        {field("destination", "Destination")}
        {field("weight", "Weight (kg)", "number")}
        <Button type="submit" size="lg" className="bg-primary px-8 py-2 h-12">
          Check Price
        </Button>
      </div>
      {submitted && (
        <p role="status" className="text-sm text-neutral-700">
          Request noted: {submitted}. {NOT_CONNECTED}
        </p>
      )}
    </form>
  );
};

export default QuoteForm;
