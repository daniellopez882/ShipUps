/** Validation for the quote form. Pure, so it is tested without the DOM. */

export interface QuoteInput {
  origin: string;
  destination: string;
  weight: string;
}

export type QuoteErrors = Partial<Record<keyof QuoteInput, string>>;

export const MAX_WEIGHT_KG = 30_000;

export function validateQuote(input: QuoteInput): QuoteErrors {
  const errors: QuoteErrors = {};
  const origin = input.origin.trim();
  const destination = input.destination.trim();
  if (!origin) errors.origin = "Enter an origin.";
  if (!destination) errors.destination = "Enter a destination.";
  if (origin && destination && origin.toLowerCase() === destination.toLowerCase()) {
    errors.destination = "Destination must differ from origin.";
  }
  const weight = Number(input.weight.trim());
  if (input.weight.trim() === "" || Number.isNaN(weight)) {
    errors.weight = "Enter the weight in kg.";
  } else if (weight <= 0) {
    errors.weight = "Weight must be greater than zero.";
  } else if (weight > MAX_WEIGHT_KG) {
    errors.weight = `Weight must be at most ${MAX_WEIGHT_KG.toLocaleString("en-US")} kg.`;
  }
  return errors;
}

export function describeRequest(input: QuoteInput): string {
  const weight = Number(input.weight.trim());
  return `${input.origin.trim()} → ${input.destination.trim()}, ${weight.toLocaleString("en-US")} kg`;
}
