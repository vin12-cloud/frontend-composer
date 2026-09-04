import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, MessageCircle, Moon, Phone, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/global-emmex-hero.jpg";
import powerImage from "@/assets/emmex-power.jpg";
import logisticsImage from "@/assets/emmex-logistics.jpg";
import contractingImage from "@/assets/emmex-contracting.jpg";
import tyreImage from "@/assets/emmex-tyre.jpg";
import routeImage from "@/assets/emmex-route.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Emmex | Precision in Movement" },
      {
        name: "description",
        content:
          "Global Emmex Ventures Limited connects automotive products, procurement, and contracting through one dependable supply line.",
      },
      { property: "og:title", content: "Global Emmex | Precision in Movement" },
      {
        property: "og:description",
        content:
          "Automotive products, procurement, and contracting for businesses that need to keep moving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GlobalEmmexHome,
});

const company = {
  name: "Global Emmex Ventures Limited",
  shortName: "GLOBAL EMMEX",
  address: "No. 44 Olu Obasanjo Road, Port Harcourt, Rivers State, Nigeria",
  phones: ["0806 413 7175", "0803 341 4429", "0806 419 5503"],
  whatsapp: "WHATSAPP_NUMBER_HERE",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Procurement", href: "#procurement" },
  { label: "Contracting", href: "#contracting" },
  { label: "Contact", href: "#contact" },
];

const products = [
  {
    number: "01",
    title: "Tyres & Tubes",
    description: "Commercial tyre and tube supply for the vehicles that carry work forward.",
    image: tyreImage,
    alt: "Close-up of a commercial tyre and blue alloy wheel",
  },
  {
    number: "02",
    title: "Alloy Wheels",
    description: "Precision wheel solutions selected for fit, finish, and working conditions.",
    image: heroImage,
    alt: "Dark alloy wheel with a precision tread pattern",
  },
  {
    number: "03",
    title: "Automotive Batteries",
    description: "Dependable power components for automotive and commercial applications.",
    image: powerImage,
    alt: "Automotive battery and sealed lubricant container",
  },
  {
    number: "04",
    title: "Lubricants",
    description: "Industrial-grade fluids that help equipment perform through demanding cycles.",
    image: powerImage,
    alt: "Sealed industrial lubricant beside an automotive battery",
  },
];

const enquiryOptions = ["Automotive Products", "Procurement", "Contracting", "General"];

function GlobalEmmexHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState("Automotive Products");
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const openWhatsApp = () => {
    if (company.whatsapp !== "WHATSAPP_NUMBER_HERE") {
      window.open(
        `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Global Emmex, I have an enquiry about ${selectedIntent}.`)}`,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-brand-gold selection:text-brand-navy">
      <header className="site-header">
        <div className="page-shell flex h-[76px] items-center justify-between gap-5">
          <a href="#intro" className="brand-lockup" aria-label="Global Emmex home">
            <span className="brand-mark">GE</span>
            <span>
              <span className="block font-display text-[13px] font-semibold tracking-[0.18em] text-foreground">
                GLOBAL EMMEX
              </span>
              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.22em] text-brand-electric">
                Ventures Limited
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
            <Button className="hidden rounded-full bg-brand-gold px-5 text-brand-navy hover:bg-brand-electric hover:text-brand-navy sm:inline-flex" onClick={() => setEnquiryOpen(true)}>
              Make an enquiry <ArrowRight />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="theme-toggle lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            <nav className="page-shell flex flex-col gap-1 py-5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                  <ArrowRight />
                </a>
              ))}
              <Button className="mt-3 justify-center rounded-full bg-brand-gold text-brand-navy hover:bg-brand-electric" onClick={() => { setEnquiryOpen(true); setMenuOpen(false); }}>
                Make an enquiry
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="intro" className="hero-section">
          <img className="hero-image" src={heroImage} alt="Dark alloy wheel and heavy-duty tyre tread" width={1600} height={912} />
          <div className="hero-wash" />
          <div className="page-shell hero-content">
            <div className="max-w-[720px]">
              <p className="eyebrow text-brand-gold">Precision in movement</p>
              <h1 className="mt-6 max-w-[720px] font-display text-[clamp(3.4rem,7.5vw,7.8rem)] leading-[0.91] tracking-[-0.055em] text-brand-white">
                Everything that keeps business moving.
              </h1>
              <p className="mt-7 max-w-[520px] text-lg leading-relaxed text-brand-soft-gray sm:text-xl">
                Automotive products, procurement, and contracting connected by one clear, dependable supply line.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button className="rounded-full bg-brand-gold px-6 py-6 text-brand-navy hover:bg-brand-electric hover:text-brand-navy" onClick={() => scrollTo("#products")}>
                  Explore our products <ArrowRight />
                </Button>
                <Button variant="outline" className="rounded-full border-brand-white/40 bg-brand-navy/20 px-6 py-6 text-brand-white hover:border-brand-gold hover:bg-brand-navy/40 hover:text-brand-white" onClick={() => setEnquiryOpen(true)}>
                  Talk to our team
                </Button>
              </div>
            </div>
            <div className="hero-footnote">
              <span className="hero-line" />
              <span>Supply / Procurement / Contracting</span>
              <span className="ml-auto hidden sm:inline">Nigeria</span>
            </div>
          </div>
        </section>

        <section id="about" className="section-light section-space">
          <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-brand-blue">01 / Introduction</p>
              <h2 className="section-title mt-4 max-w-[450px] text-brand-navy">The right connection changes the journey.</h2>
            </div>
            <div className="max-w-[690px]">
              <p className="text-xl leading-relaxed text-brand-navy/80 sm:text-2xl">
                Global Emmex Ventures Limited is a Nigerian commercial business working across automotive products, procurement, and general contracting.
              </p>
              <p className="mt-5 max-w-[590px] leading-relaxed text-brand-navy/60">
                Our work is about making the next step easier to take: the right product, the right supply route, and the right support for the job ahead.
              </p>
              <a href="#products" className="text-link mt-8 inline-flex">See what we supply <ArrowRight /></a>
            </div>
          </div>
        </section>

        <section id="products" className="section-navy section-space">
          <div className="page-shell">
            <div className="flex flex-col justify-between gap-5 border-b border-brand-white/15 pb-7 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-brand-electric">02 / Products index</p>
                <h2 className="section-title mt-4 max-w-[560px] text-brand-white">Built around the things that move.</h2>
              </div>
              <p className="max-w-[250px] text-sm leading-relaxed text-brand-soft-gray">A focused range for automotive, industrial, and commercial requirements.</p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {products.map((product) => (
                <article key={product.number} className="product-card group">
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.alt} className="product-image" loading="lazy" width={1200} height={900} />
                    <span className="product-number">{product.number}</span>
                    <span className="product-arrow"><ArrowRight /></span>
                  </div>
                  <div className="flex items-start justify-between gap-5 pt-5">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-brand-white">{product.title}</h3>
                      <p className="mt-2 max-w-[360px] text-sm leading-relaxed text-brand-soft-gray">{product.description}</p>
                    </div>
                    <a href="#contact" className="shrink-0 pt-1 text-brand-gold" aria-label={`Enquire about ${product.title}`}><ArrowRight /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-band">
          <img src={routeImage} alt="Freight vehicle moving through an industrial corridor at twilight" loading="lazy" width={1200} height={900} />
          <div className="story-band-overlay" />
          <div className="page-shell relative z-10 py-28 sm:py-36">
            <p className="eyebrow text-brand-gold">Beyond the road</p>
            <h2 className="mt-5 max-w-[700px] font-display text-5xl leading-[0.98] tracking-[-0.045em] text-brand-white sm:text-7xl">When movement needs more than a product.</h2>
          </div>
        </section>

        <section id="procurement" className="section-blue section-space">
          <div className="page-shell grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow text-brand-gold">03 / Procurement</p>
              <h2 className="section-title mt-4 max-w-[560px] text-brand-white">Source. Coordinate. Deliver.</h2>
              <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-brand-soft-gray">Procurement support that brings specification, sourcing, and logistics into one accountable conversation.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["Clarify the requirement", "Coordinate the supply line", "Deliver with visibility"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-brand-white/15 bg-brand-navy/20 px-4 py-4">
                    <span className="font-mono text-xs text-brand-gold">0{index + 1}</span>
                    <span className="text-sm text-brand-white">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 rounded-full bg-brand-gold text-brand-navy hover:bg-brand-electric hover:text-brand-navy" onClick={() => { setSelectedIntent("Procurement"); setEnquiryOpen(true); }}>
                Discuss procurement <ArrowRight />
              </Button>
            </div>
            <div className="image-frame image-frame-tall"><img src={logisticsImage} alt="Organized industrial logistics warehouse with stacked freight" loading="lazy" width={1200} height={900} /></div>
          </div>
        </section>

        <section id="contracting" className="section-light section-space">
          <div className="page-shell grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="image-frame"><img src={contractingImage} alt="Structural steel infrastructure under construction" loading="lazy" width={1200} height={900} /></div>
            <div>
              <p className="eyebrow text-brand-blue">04 / Contracting</p>
              <h2 className="section-title mt-4 max-w-[570px] text-brand-navy">Move the project forward.</h2>
              <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-brand-navy/70">General contracting support for work that needs a steady hand, clear coordination, and a dependable route from plan to delivery.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Supply coordination", "Site support", "Project delivery"].map((item) => <span key={item} className="rounded-full bg-brand-navy/8 px-4 py-2 text-sm text-brand-navy/75">{item}</span>)}
              </div>
              <Button className="mt-8 rounded-full bg-brand-navy text-brand-white hover:bg-brand-blue" onClick={() => { setSelectedIntent("Contracting"); setEnquiryOpen(true); }}>
                Discuss a contract <ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-space">
          <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow text-brand-gold">05 / Contact</p>
              <h2 className="section-title mt-4 max-w-[500px] text-brand-white">Let’s start a useful conversation.</h2>
              <p className="mt-6 max-w-[430px] leading-relaxed text-brand-soft-gray">Choose what you need and we’ll point the conversation in the right direction.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 text-sm text-brand-soft-gray"><Phone className="mt-0.5 size-4 shrink-0 text-brand-electric" /><span>{company.phones.join(" · ")}<small className="mt-1 block text-xs text-brand-soft-gray/60">Public-directory numbers — unconfirmed</small></span></div>
                <div className="flex items-start gap-3 text-sm text-brand-soft-gray"><span className="mt-0.5 size-4 shrink-0 text-center text-brand-electric">⌖</span><span>{company.address}<small className="mt-1 block text-xs text-brand-soft-gray/60">Public-directory address — unconfirmed</small></span></div>
              </div>
            </div>
            <div className="contact-panel">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="eyebrow text-brand-electric">Enquiry desk</p>
                  <h3 className="mt-3 font-display text-3xl text-brand-white">What can we help move?</h3>
                </div>
                <MessageCircle className="size-8 text-brand-gold" />
              </div>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {enquiryOptions.map((option) => <button type="button" key={option} className={`intent-option ${selectedIntent === option ? "intent-option-active" : ""}`} onClick={() => setSelectedIntent(option)}>{option}</button>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-full bg-brand-gold text-brand-navy hover:bg-brand-electric hover:text-brand-navy" onClick={openWhatsApp}><MessageCircle /> Continue on WhatsApp</Button>
                <Button variant="outline" className="rounded-full border-brand-white/25 text-brand-white hover:border-brand-gold hover:bg-transparent hover:text-brand-white" onClick={() => setSubmitted(true)}>Request a callback</Button>
              </div>
              {submitted && <p className="mt-5 rounded-2xl border border-brand-gold/30 bg-brand-gold/10 px-4 py-3 text-sm leading-relaxed text-brand-gold">The official WhatsApp number and email are still awaiting confirmation. This prototype keeps the enquiry path ready without presenting placeholder contact details as live.</p>}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-display text-lg text-brand-white">{company.name}</p><p className="mt-1 text-xs text-brand-soft-gray/60">Precision in movement.</p></div>
          <div className="flex items-center gap-5 text-sm text-brand-soft-gray"><a href="#intro" className="footer-link">Back to top <ChevronDown className="rotate-180" /></a><span>© {new Date().getFullYear()}</span></div>
        </div>
      </footer>

      <div className="floating-enquiry">
        {enquiryOpen && <div className="enquiry-popover"><p className="eyebrow text-brand-blue">Choose an enquiry</p><div className="mt-3 grid gap-1">{enquiryOptions.map((option) => <button type="button" key={option} className="enquiry-option" onClick={() => { setSelectedIntent(option); setEnquiryOpen(false); scrollTo("#contact"); }}>{option}<ArrowRight /></button>)}</div></div>}
        <Button className="rounded-full bg-brand-gold px-5 py-6 text-brand-navy shadow-xl hover:bg-brand-electric hover:text-brand-navy" onClick={() => setEnquiryOpen((open) => !open)}>{enquiryOpen ? <X /> : <MessageCircle />} <span className="hidden sm:inline">Make an enquiry</span></Button>
      </div>
    </div>
  );
}