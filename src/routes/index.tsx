import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Leaf,
  Sprout,
  Package,
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  BadgeIndianRupee,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { toast, Toaster } from "sonner";

import logoAsset from "../../public/images/logo.jpg.asset.json";
import img1 from "../../public/images/image.png.asset.json";
import img2 from "../../public/images/image-2.png.asset.json";
import img3 from "../../public/images/image-3.png.asset.json";
import img4 from "../../public/images/image-4.png.asset.json";
import img5 from "../../public/images/image-5.png.asset.json";
import img6 from "../../public/images/image-6.png.asset.json";
import img7 from "../../public/images/image-7.png.asset.json";
import img8 from "../../public/images/image-8.png.asset.json";

const heroImg = img5.url;
const cardamomImg = img3.url;
const pepperImg = img6.url;
const logoImg = logoAsset.url;

const GALLERY = [
  { url: img7.url, alt: "Green cardamom pods on wooden spoon" },
  { url: img1.url, alt: "Ground black pepper with peppercorns" },
  { url: img8.url, alt: "Freshly harvested pepper berries" },
  { url: img4.url, alt: "Cardamom tea with pods" },
  { url: img2.url, alt: "Black pepper scoop on slate" },
  { url: img5.url, alt: "Green cardamom with fresh leaves" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "EcoBloom Exim Global — Premium Green Cardamom & Black Pepper Exporter from India",
      },
      {
        name: "description",
        content:
          "EcoBloom Exim Global is an Indian export business specializing in premium Green Cardamom and Black Pepper. Export-quality spices, carefully sourced and reliably delivered.",
      },
      {
        name: "keywords",
        content:
          "Green Cardamom Exporter, Black Pepper Exporter, Indian Spices Export, Premium Cardamom Supplier, Black Pepper Supplier, Export Quality Spices, Indian Spice Export Company",
      },
      {
        property: "og:title",
        content:
          "EcoBloom Exim Global — Premium Green Cardamom & Black Pepper Exporter",
      },
      {
        property: "og:description",
        content:
          "Premium Indian Green Cardamom and Black Pepper, carefully sourced and export-ready.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EcoBloom Exim Global",
          description:
            "Indian export business specializing in premium Green Cardamom and Black Pepper.",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Toaster position="top-center" richColors />
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <motion.div {...fadeUp} className="max-w-2xl">
        <SectionEyebrow>Gallery</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          From farm to export — a closer look.
        </h2>
        <p className="mt-4 text-muted-foreground">
          A glimpse of the cardamom and pepper we source, grade, and prepare for our clients worldwide.
        </p>
      </motion.div>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALLERY.map((g, i) => (
          <motion.div
            key={g.url}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl shadow-[var(--shadow-card)] ring-1 ring-border/60"
          >
            <img
              src={g.url}
              alt={g.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}



/* ---------- Header ---------- */
const NAV = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <img
        src={logoImg}
        alt="EcoBloom Exim Global logo"
        className="h-11 w-11 rounded-full object-cover shadow-[var(--shadow-card)] transition-transform group-hover:scale-105"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-semibold tracking-tight text-primary">
          EcoBloom
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Exim Global
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] hover:opacity-90 transition-opacity"
          >
            Enquire <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4 gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-1"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/50 px-3 py-1 text-xs font-medium text-primary">
            <Sprout className="h-3.5 w-3.5" /> Indian Spice Export Company
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Premium{" "}
            <span className="text-primary">Green Cardamom</span> &{" "}
            <span className="text-[color:var(--earth)]">Black Pepper</span>{" "}
            Exporter from India
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Supplying carefully sourced, export-quality Green Cardamom and Black
            Pepper with a commitment to quality, consistency, and reliable
            service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90 transition-opacity"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] ring-1 ring-border/50">
            <img
              src={heroImg}
              alt="Premium green cardamom pods and black peppercorns"
              width={1600}
              height={1000}
              className="h-full w-full object-cover aspect-[16/11]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-5 py-3 shadow-[var(--shadow-soft)] ring-1 ring-border"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Export Standard</p>
              <p className="text-sm font-semibold">Quality You Can Trust</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUp}>
          <SectionEyebrow>About Us</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            An Indian export business, rooted in quality and consistency.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            EcoBloom Exim Global is an Indian export business specializing in
            premium-quality Green Cardamom and Black Pepper. We focus on
            sourcing carefully selected products and delivering them with
            consistent quality, professional service, and efficient export
            support.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <MiniStat label="Focus" value="Two spices, done well" />
            <MiniStat label="Origin" value="Sourced across India" />
          </div>
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src={cardamomImg}
              alt="Green cardamom pods"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
            <img
              src={pepperImg}
              alt="Black peppercorns in wooden bowl"
              loading="lazy"
              width={1024}
              height={1024}
              className="mt-8 aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-medium">{value}</p>
    </div>
  );
}

/* ---------- Products ---------- */
const PRODUCTS = [
  {
    name: "Premium Green Cardamom",
    image: cardamomImg,
    bullets: ["Multiple size grades", "Fresh aroma", "Export quality"],
    desc: "Carefully selected green cardamom pods known for their vibrant colour, natural aroma, and consistent grading — ideal for culinary and industrial buyers.",
  },
  {
    name: "Premium Black Pepper",
    image: pepperImg,
    bullets: ["Bold flavour", "Carefully sourced", "Export quality"],
    desc: "Whole black peppercorns with a bold, pungent flavour and clean appearance, sourced from trusted Indian growers and prepared to export standards.",
  },
];

function Products() {
  return (
    <section
      id="products"
      className="border-y border-border/60 bg-[var(--cream)]/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl">
          <SectionEyebrow>Our Products</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Two spices. Uncompromising quality.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We keep our range focused so we can guarantee freshness, grading,
            and consistency in every shipment.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose Us ---------- */
const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Products",
    body: "Every batch is inspected against consistent grading standards before it leaves us.",
  },
  {
    icon: Sprout,
    title: "Carefully Sourced",
    body: "We work directly with trusted Indian growers and suppliers for the products we specialize in.",
  },
  {
    icon: Package,
    title: "Export Standard Packaging",
    body: "Moisture-safe, tamper-evident packaging suited to long-haul international shipping.",
  },
  {
    icon: Truck,
    title: "Reliable Service",
    body: "Predictable timelines, clear communication, and support through every stage of your order.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Competitive Pricing",
    body: "Fair, transparent pricing that reflects the true quality of what you receive.",
  },
  {
    icon: HeadphonesIcon,
    title: "Professional Customer Support",
    body: "A responsive team ready to assist with enquiries, documentation, and logistics.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <motion.div {...fadeUp} className="max-w-2xl">
        <SectionEyebrow>Why Choose Us</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Built on trust, quality, and clear communication.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
            className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/30"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
const STEPS = [
  { n: "01", title: "Product Enquiry", body: "Share your requirements — product, grade, quantity, destination." },
  { n: "02", title: "Quotation", body: "We prepare a clear, competitive quote with terms and lead time." },
  { n: "03", title: "Order Confirmation", body: "On confirmation, we schedule sourcing and quality checks." },
  { n: "04", title: "Packaging", body: "Export-grade packaging tailored to your shipment and destination." },
  { n: "05", title: "Dispatch", body: "Documentation, handover to freight, and tracking through delivery." },
];

function Process() {
  return (
    <section
      id="process"
      className="border-y border-border/60 bg-[var(--cream)]/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl">
          <SectionEyebrow>Export Process</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            A simple, transparent workflow.
          </h2>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-0 right-0 top-8 hidden lg:block h-px bg-border" />
          <div className="grid gap-8 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary font-display text-lg font-semibold text-primary shadow-[var(--shadow-card)]">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thanks! We'll get back to you shortly.");
      form.reset();
      setSubmitting(false);
    }, 700);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Let's talk about your next shipment.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out with your requirements and we'll get back to you with a
            tailored quote.
          </p>

          <div className="mt-8 space-y-5">
            <ContactRow icon={MapPin} label="Address">
              Building No. 562, Nettani<br />
              Keezharoor P.O, Trivandrum<br />
              Kerala, India
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <div className="flex flex-col gap-1">
                <a href="tel:+919243162100" className="hover:text-primary transition-colors">
                  +91 92431 62100
                </a>
                <a href="tel:+918714732059" className="hover:text-primary transition-colors">
                  +91 87147 32059
                </a>
              </div>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a
                href="mailto:info@ecobloomeximglobal.com"
                className="hover:text-primary transition-colors"
              >
                info@ecobloomeximglobal.com
              </a>
            </ContactRow>
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="name" label="Name" required />
            <Field name="email" label="Email" type="email" required />
            <Field name="phone" label="Phone" type="tel" />
            <SelectField
              name="product"
              label="Product"
              options={["Green Cardamom", "Black Pepper", "Both"]}
            />
          </div>
          <div className="mt-5">
            <TextArea name="message" label="Message" required />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] hover:opacity-90 disabled:opacity-60 transition-opacity"
          >
            {submitting ? "Sending…" : "Send Enquiry"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm text-foreground">{children}</p>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>
          Select a product
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  name,
  label,
  required,
}: {
  name: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        required={required}
        maxLength={2000}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
      />
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--cream)]/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
              An Indian export business specializing in premium Green Cardamom
              and Black Pepper.
            </p>
          </div>
          <FooterCol title="Quick Links">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#why">Why Choose Us</a>
            <a href="#process">Export Process</a>
          </FooterCol>
          <FooterCol title="Products">
            <a href="#products">Green Cardamom</a>
            <a href="#products">Black Pepper</a>
          </FooterCol>
          <FooterCol title="Contact">
            <a href="mailto:info@ecobloomeximglobal.com">
              info@ecobloomeximglobal.com
            </a>
            <a href="tel:+919243162100">+91 92431 62100</a>
            <a href="tel:+918714732059">+91 87147 32059</a>
            <span>Keezharoor, Trivandrum, Kerala</span>
          </FooterCol>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © 2025 EcoBloom Exim Global. All rights reserved.
          </p>
          <p>Premium Indian Spices · Green Cardamom · Black Pepper</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-foreground">
        {title}
      </h4>
      <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground [&_a:hover]:text-primary [&_a]:transition-colors">
        {children}
      </div>
    </div>
  );
}

/* ---------- Shared ---------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
      <Leaf className="h-3 w-3" />
      {children}
    </span>
  );
}
