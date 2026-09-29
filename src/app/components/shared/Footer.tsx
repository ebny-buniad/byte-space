import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500"] });

const columns = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/categories/business" },
    { label: "IT", href: "/categories/it" },
    { label: "Design", href: "/categories/design" },
  ],
  [
    { label: "Development", href: "/categories/development" },
    { label: "Marketing", href: "/categories/marketing" },
    { label: "Photography", href: "/categories/photography" },
    { label: "Finance", href: "/categories/finance" },
    { label: "Sport", href: "/categories/sport" },
  ],
  [
    { label: "Become a Creator", href: "/register" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className={`${jakarta.className} w-full border-t border-[#dcdcdc] bg-white text-[#1a1a1a]`}>
      <div className="mx-auto max-w-330 px-6 pt-16 md:px-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_580px] lg:gap-0">
          {/* LEFT: logo + newsletter */}
          <div className="max-w-[510px]">
            {/* set your logo here */}
            <Link href="/" aria-label="ByteSpace home">
              <Image src="/images/footerlogo.png" alt="ByteSpace" width={172} height={34} className="h-auto w-[172px]" />
            </Link>

            <p className="mt-4 text-sm font-light">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="mt-12 flex items-center gap-6">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="h-[52px] w-full max-w-[376px] rounded-full border border-[#cfcfcf] bg-white px-6 text-base font-light text-[#1a1a1a] outline-none placeholder:text-[#333] focus:border-[#0038e0]"
              />
              <button
                type="submit"
                className="h-[46px] shrink-0 rounded-full bg-[#d9ff1f] px-6 text-lg font-normal text-[#111] transition-transform hover:-translate-y-0.5"
              >
                Search
              </button>
            </form>

            <p className="mt-9 max-w-[480px] text-xs font-light leading-[1.6]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          {/* RIGHT: link columns */}
          <nav className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:pt-2">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-[18px]">
                {col.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] font-light hover:text-[#0038e0]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-24 flex flex-col gap-4 border-t border-[#dcdcdc] py-8 text-xs font-light sm:flex-row sm:items-center sm:justify-between lg:mt-[110px]">
          <p>@ 2026 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-[#0038e0]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}