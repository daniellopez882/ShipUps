import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import Home from "@/app/page";
import { NO_DEMO_VIDEO } from "@/components/sections/HeroSection";
import PrimaryBar from "@/components/small/PrimaryBar";
import QuoteForm, { NOT_CONNECTED } from "@/components/small/QuoteForm";
import { NAV_LINKS } from "@/lib/nav";

afterEach(() => vi.restoreAllMocks());

describe("Home", () => {
  it("renders without console errors or warnings", () => {
    // next/image used the removed `layout="fill"` prop; it logged on every render.
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    render(<Home />);
    expect(error).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
  });

  it("has a target for every navigation link", () => {
    const { container } = render(<Home />);
    for (const link of NAV_LINKS) {
      expect(container.querySelector(link.href), link.href).not.toBeNull();
    }
    expect(container.querySelector("#quote")).not.toBeNull();
    expect(container.querySelector("#top")).not.toBeNull();
  });

  it("every image is described or explicitly decorative", () => {
    const { container } = render(<Home />);
    const images = Array.from(container.querySelectorAll("img"));
    expect(images.length).toBeGreaterThan(8);
    for (const img of images) {
      const alt = img.getAttribute("alt");
      expect(alt, img.getAttribute("src") ?? "").not.toBeNull();
      if (alt) {
        // Not a file path, not a bare number (the old alts were "100", "/track.png", "/mode1.jpg").
        expect(alt).not.toMatch(/^\/|\.(png|jpe?g)$|^\d+$/);
        expect(alt.trim().length).toBeGreaterThan(3); // "X icon" is a fine alt
      }
    }
  });

  it("calls to action lead to the quote form; the demo video button says there is none", () => {
    render(<Home />);
    for (const name of ["Join Now", "Request Quote"]) {
      const links = screen.getAllByRole("link", { name });
      expect(links.length).toBeGreaterThan(0);
      links.forEach((l) => expect(l).toHaveAttribute("href", "#quote"));
    }
    const demo = screen.getByRole("button", { name: /Play Demo/ });
    expect(demo).toBeDisabled();
    expect(demo).toHaveAttribute("title", NO_DEMO_VIDEO);
  });

  it("uses landmarks", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Warehousing and Logistics");
  });
});

describe("PrimaryBar", () => {
  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<PrimaryBar />);
    expect(screen.queryByRole("navigation", { name: "Primary", hidden: false })).toBeInTheDocument();
    expect(document.getElementById("mobile-nav")).toBeNull();

    const burger = screen.getByRole("button", { name: "Open menu" });
    expect(burger).toHaveAttribute("aria-expanded", "false");
    await user.click(burger);

    const mobile = document.getElementById("mobile-nav");
    expect(mobile).not.toBeNull();
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    for (const link of NAV_LINKS) {
      expect(within(mobile!).getByRole("link", { name: link.label })).toHaveAttribute("href", link.href);
    }

    await user.click(within(mobile!).getByRole("link", { name: "Services" }));
    expect(document.getElementById("mobile-nav")).toBeNull();
  });
});

describe("QuoteForm", () => {
  it("validates before it does anything", async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    await user.click(screen.getByRole("button", { name: "Check Price" }));
    expect(screen.getByText("Enter an origin.")).toBeInTheDocument();
    expect(screen.getByText("Enter a destination.")).toBeInTheDocument();
    expect(screen.getByText("Enter the weight in kg.")).toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    await user.type(screen.getByLabelText("Origin"), "Berlin");
    await user.type(screen.getByLabelText("Destination"), "berlin");
    await user.type(screen.getByLabelText("Weight (kg)"), "-1");
    await user.click(screen.getByRole("button", { name: "Check Price" }));
    expect(screen.getByText("Destination must differ from origin.")).toBeInTheDocument();
    expect(screen.getByText("Weight must be greater than zero.")).toBeInTheDocument();
    expect(screen.getByLabelText("Destination")).toHaveAttribute("aria-invalid", "true");
  });

  it("says plainly what a valid submission does", async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    await user.type(screen.getByLabelText("Origin"), "Berlin");
    await user.type(screen.getByLabelText("Destination"), "Paris");
    await user.type(screen.getByLabelText("Weight (kg)"), "12");
    await user.click(screen.getByRole("button", { name: "Check Price" }));
    const status = screen.getByRole("status");
    expect(status).toHaveTextContent("Berlin → Paris, 12 kg");
    expect(status).toHaveTextContent(NOT_CONNECTED);
  });
});
