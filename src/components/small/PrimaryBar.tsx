"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import NavItem from "@/components/small/NavItem";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/nav";

const PrimaryBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between w-full p-[24px] md:px-[150px]">
      <a href="#top" aria-label="ShipUp home">
        <Logo />
      </a>

      {/* Burger (mobile). It used to be an icon with no behaviour. */}
      <button
        type="button"
        className="flex md:hidden p-2"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
      </button>

      <nav className="hidden md:flex gap-8" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <NavItem key={link.href} href={link.href}>
            {link.label}
          </NavItem>
        ))}
      </nav>

      <div className="hidden md:flex gap-5">
        <Button asChild className="px-4 py-2 h-12 w-40">
          <a href="#quote">Join Now</a>
        </Button>
        <Button asChild variant="outline" className="text-primary px-4 py-2 h-12 w-40">
          <a href="#quote">Request Quote</a>
        </Button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex md:hidden flex-col gap-4 w-full pt-6"
        >
          {NAV_LINKS.map((link) => (
            <NavItem key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </NavItem>
          ))}
          <Button asChild className="h-12">
            <a href="#quote" onClick={() => setOpen(false)}>
              Request Quote
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default PrimaryBar;
