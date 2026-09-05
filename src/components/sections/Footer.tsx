import Image from "next/image";
import Logo from "@/components/small/Logo";
import { NAV_LINKS } from "@/lib/nav";

const SOCIAL = [
  { src: "/facebook.png", name: "Facebook" },
  { src: "/x.png", name: "X" },
  { src: "/whatsapp.png", name: "WhatsApp" },
  { src: "/ig.png", name: "Instagram" },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col md:flex-row md:justify-around gap-6 px-[30px] py-16 text-neutral-100 bg-primary"
    >
      <div className="flex flex-col w-full md:w-64">
        <Logo />
        <p className="text-sm md:text-d-sm">
          ShipUp delivers an unparalleled customer service through dedicated customer
          teams, engaged people working in an agile culture, and a global footprint
        </p>
      </div>

      <nav className="flex flex-col gap-4" aria-label="Footer">
        <span className="font-bold">Explore</span>
        <ul className="flex flex-col gap-2 text-sm md:text-d-sm">
          {NAV_LINKS.filter((l) => l.href !== "#contact").map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-neutral-100 hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-4">
        <span className="font-bold">Social Media</span>
        <ul className="flex gap-3" aria-label="Social media">
          {SOCIAL.map((s) => (
            <li key={s.name}>
              {/* Icons only: no profiles exist to link to. */}
              <Image src={s.src} alt={`${s.name} icon`} height="50" width="50" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
