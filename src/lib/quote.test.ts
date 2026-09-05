import { describe, expect, it } from "vitest";
import { MAX_WEIGHT_KG, describeRequest, validateQuote } from "./quote";

describe("validateQuote", () => {
  it("requires every field", () => {
    expect(validateQuote({ origin: "", destination: "", weight: "" })).toEqual({
      origin: "Enter an origin.",
      destination: "Enter a destination.",
      weight: "Enter the weight in kg.",
    });
    expect(validateQuote({ origin: "  ", destination: " ", weight: " " })).toHaveProperty("origin");
  });

  it("accepts a sensible request", () => {
    expect(validateQuote({ origin: "Berlin", destination: "Paris", weight: "12" })).toEqual({});
    expect(validateQuote({ origin: "Berlin", destination: "Paris", weight: "0.5" })).toEqual({});
  });

  it("rejects the same origin and destination, case-insensitively", () => {
    expect(validateQuote({ origin: "Berlin", destination: "berlin", weight: "1" })).toEqual({
      destination: "Destination must differ from origin.",
    });
  });

  it("checks the weight is a positive number within range", () => {
    expect(validateQuote({ origin: "A", destination: "B", weight: "abc" }).weight).toMatch(/kg/);
    expect(validateQuote({ origin: "A", destination: "B", weight: "0" }).weight).toMatch(/greater than zero/);
    expect(validateQuote({ origin: "A", destination: "B", weight: "-3" }).weight).toMatch(/greater than zero/);
    expect(validateQuote({ origin: "A", destination: "B", weight: String(MAX_WEIGHT_KG + 1) }).weight).toMatch(/at most 30,000/);
    expect(validateQuote({ origin: "A", destination: "B", weight: String(MAX_WEIGHT_KG) })).toEqual({});
  });
});

describe("describeRequest", () => {
  it("summarises the request", () => {
    expect(describeRequest({ origin: " Berlin ", destination: "Paris", weight: " 1250 " })).toBe(
      "Berlin → Paris, 1,250 kg",
    );
  });
});
