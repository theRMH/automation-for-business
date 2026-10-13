"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot, Building2, Check, Database, Globe, GraduationCap, LayoutDashboard, Layers, Search, Sparkles, Truck, UtensilsCrossed, Workflow, Wrench,
} from "lucide-react";

const USECASE_ICONS = [Wrench, Building2, Truck, UtensilsCrossed, GraduationCap];
const BUILD_ICONS = [LayoutDashboard, Globe, Sparkles];
import { A, BUILD, FAQ, FOOTER_COLS, PROCESS, USECASES } from "./data";

const WHATSAPP = `https://wa.me/917010069287?text=${encodeURIComponent("Hi Automation For Business, I would like to discuss a project with you. Could we talk?")}`;
const img = (p: string) => `${A}/${p}`;

function Arrow({ dir = "next" }: { dir?: "prev" | "next" }) {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" aria-hidden className={dir === "prev" ? "rotate-180" : ""}>
      <path d="M7.99 13.25 6.71 11.99l4.44-4.44H0V5.7h11.15L6.71 1.27 7.99 0l6.63 6.62-6.63 6.63Z" fill="currentColor" />
    </svg>
  );
}

/* ---------------------------------------------------------------- header */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-[100] w-full backdrop-blur-[9px] transition ${scrolled ? "bg-[#03000b]/90 shadow-[0_12px_32px_rgba(0,0,0,.35)]" : "bg-[#03000b] shadow-[0_8px_24px_rgba(0,0,0,.22)]"}`}>
      <div className="mx-auto flex h-[77px] max-w-[1520px] items-center justify-between gap-6 px-5 md:px-10">
        <div className="flex min-w-0 items-center gap-16">
          <a href="#top" aria-label="Automation For Business home" className="shrink-0">
            <span className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("afb-logo-white.png")} alt="" width={268} height={128} className="h-9 w-auto" />
              <span className="text-[15px] font-extrabold uppercase leading-[1.05] tracking-tight text-white">Automation<br />For Business</span>
            </span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#f7e934] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#151515] transition hover:brightness-95">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M3.68 7.9 5.66 5.93c.2-.2.34-.45.4-.72a1.4 1.4 0 0 0-.02-.84c-.14-.46-.26-.92-.37-1.38-.09-.41-.45-.74-.86-.74H3.68c-.83 0-1.52.68-1.43 1.51.7 6.29 5.7 11.29 11.99 11.99.83.09 1.5-.59 1.5-1.42v-1.13c0-.42-.34-.76-.75-.83-.45-.09-.9-.2-1.33-.34-.58-.18-1.22-.05-1.64.38l-1.94 1.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ hero */
function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-47px)] items-center" aria-label="Hero Section" id="top">
      <div className="absolute inset-0 overflow-hidden bg-[#0d0714]" aria-hidden>
        <video muted loop playsInline autoPlay preload="auto" aria-hidden className="absolute inset-0 h-full w-full object-cover">
          <source src={img("hero-mobile.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#0d0714]" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1520px] px-5 pb-[150px] pt-16 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(300px,435px)] lg:gap-x-[60px]">
          <h1 className="pr-4 text-[clamp(44px,7.4vw,104px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
            <span className="block">AI Is Your</span>
            <span className="block text-right">Unfair Advantage.</span>
          </h1>
          <div className="flex flex-col items-start">
            <span className="mb-4 h-2 w-[84px] rounded-full bg-[#a100ff]" aria-hidden />
            <p className="mb-3 font-serif text-[25px] leading-10 text-white/80">
              We design and build the platforms, websites and AI tools that let growing businesses run with less friction.
            </p>
            <a href="#services" aria-label="Explore" className="inline-flex size-[31px] items-center justify-center bg-[#a100ff] transition-transform hover:translate-x-[3px]">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden><path d="M0 11.52 4.81 5.76 0 0h4.75l4.9 5.76-4.9 5.76H0Z" fill="white" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- services */
function Services() {
  const base = "relative flex flex-col items-start overflow-hidden p-[35px] pb-[31px]";
  const eyebrow = "mb-[30px] flex flex-col text-[17px] font-extrabold uppercase leading-5 tracking-[-0.01em]";
  const heading = "text-[30px] font-extrabold leading-[33px] tracking-[-0.035em] max-w-[290px] md:min-h-[132px]";
  const link = "group mt-auto flex w-full items-center justify-end gap-2.5 pb-1 pt-10 text-base font-extrabold";
  return (
    <section id="services" className="-mt-[120px] bg-gradient-to-b from-[#0d0714]/60 to-[#0d0714] pb-[120px]">
      <div className="mx-auto max-w-[1520px] px-5 md:px-10">
        <h2 className="sr-only">What we do</h2>
        <div className="relative grid gap-6 md:grid-cols-3 lg:gap-[54px]">
          <article className={`${base} bg-[#37045c] text-white`}>
            <p className={eyebrow}><Layers className="mb-4 size-9" strokeWidth={1.6} aria-hidden /><span>Business Platforms</span></p>
            <h3 className={`${heading} max-w-[98%]`}>Custom software that runs your daily operations end to end</h3>
            <p className="mt-[30px] max-w-[330px] text-[18px] leading-[1.48] text-white/75">
              Jobs, people, orders and payments in one system your whole team can use from the office or from a phone.
            </p>
            <a className={link} href={WHATSAPP} target="_blank" rel="noopener noreferrer">Talk to us <span className="text-2xl leading-none">›</span></a>
          </article>
          <article className={`${base} border border-black/5 bg-[#f4f4f4] text-[#171717] bg-[radial-gradient(circle_at_88%_96%,rgba(176,94,232,.14),transparent_38%)]`}>
            <p className={eyebrow}><Bot className="mb-4 size-9" strokeWidth={1.6} aria-hidden /><span>AI Assistants</span></p>
            <h3 className={heading}>Assistants that handle the routine so your people do not have to</h3>
            <p className="mt-[30px] max-w-[330px] text-[18px] leading-[1.48] text-[#3f3f3f]">
              Add AI to dispatch, support and scheduling so repeat requests are handled quickly and consistently.
            </p>
            <a className={link} href={WHATSAPP} target="_blank" rel="noopener noreferrer">Talk to us <span className="text-2xl leading-none">›</span></a>
          </article>
          <article className={`${base} bg-gradient-to-b from-white to-[#b563ee] text-[#171717]`}>
            <p className={eyebrow}><Workflow className="mb-4 size-9" strokeWidth={1.6} aria-hidden /><span>Automation</span></p>
            <h3 className={heading}>Connect your tools and let the busywork run itself</h3>
            <p className="mt-[30px] max-w-[330px] text-[18px] leading-[1.48] text-[#3f3f3f]">
              Hand-offs, reminders and updates move between your systems automatically, with fewer errors and no copy-pasting.
            </p>
            <a className={link} href={WHATSAPP} target="_blank" rel="noopener noreferrer">Talk to us <span className="text-2xl leading-none">›</span></a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- visitors */
function Visitors() {
  const card =
    "relative rounded-[22px] border border-[rgba(120,82,186,.5)] bg-[#130c23] px-[42px] pb-[34px] pt-9 text-left shadow-[0_18px_55px_rgba(0,0,0,.24)] bg-[radial-gradient(circle_at_20%_15%,rgba(96,52,164,.25),transparent_32%),linear-gradient(180deg,rgba(19,12,35,.92),rgba(12,8,25,.94))] max-md:px-6";
  const iconWrap = "flex size-[72px] shrink-0 items-center justify-center rounded-full border border-[rgba(179,119,255,.54)] bg-[rgba(74,35,133,.28)] shadow-[inset_0_0_0_2px_rgba(153,103,255,.12)]";
  const items = (list: [string, string][]) => (
    <dl className="space-y-5">
      {list.map(([t, d]) => (
        <div key={t} className="flex gap-3">
          <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#a100ff]/30 text-xs text-[#d9a6ff]" aria-hidden>✓</span>
          <div><dt className="font-semibold text-white">{t}</dt><dd className="text-white/60">{d}</dd></div>
        </div>
      ))}
    </dl>
  );
  const glow = { filter: "drop-shadow(0 0 6px rgba(180,102,255,.45))" };
  return (
    <section className="bg-[#060217] bg-[radial-gradient(45%_45%_at_100%_15%,rgba(151,92,231,.18),transparent_70%)] py-[120px]">
      <div className="mx-auto flex max-w-[1520px] flex-col items-center px-5 text-center md:px-10">
        <p className="mb-[22px] text-xs font-medium uppercase tracking-[.24em] text-[#cab5ff]">Who it is for</p>
        <h2 className="max-w-[23ch] font-serif text-[clamp(32px,5.5vw,76px)] font-normal leading-[1.03] tracking-[-0.045em] text-white">Every system serves two groups.</h2>

        <svg viewBox="0 0 1080 122" preserveAspectRatio="none" className="mt-10 hidden h-auto w-full max-w-[1080px] overflow-visible md:block" style={glow} aria-hidden>
          <defs>
            <linearGradient id="vc-top" x1="0" y1="0" x2="1080" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b879ff" /><stop offset="1" stopColor="#7f4cff" /></linearGradient>
          </defs>
          <path d="M540,0 L540,58 M183.6,58 L896.4,58 M183.6,58 L183.6,122 M896.4,58 L896.4,122" stroke="url(#vc-top)" strokeWidth="1.6" fill="none" opacity=".85" />
          <circle cx="540" cy="2" r="6" fill="#c98cff" />
        </svg>

        <div className="mt-10 grid w-full max-w-[1080px] gap-10 md:mt-0 md:grid-cols-2 md:gap-[clamp(40px,10vw,127.6px)]">
          <article className={card}>
            <div className="mb-5 flex items-center gap-[22px]">
              <span className={iconWrap} aria-hidden>
                <svg width="26" height="34" viewBox="0 0 26 34" fill="none"><rect x="6.7" y="1" width="11.68" height="11.68" rx="5.84" stroke="#9A5CFF" strokeWidth="2" /><path d="M12.54 18.59c6.34 0 11.54 5.14 11.54 11.46 0 1.47-1.19 2.66-2.66 2.66H3.66A2.66 2.66 0 0 1 1 30.05c0-6.32 5.2-11.46 11.54-11.46Z" stroke="#9A5CFF" strokeWidth="2" /></svg>
              </span>
              <h3 className="font-serif text-[clamp(34px,3.4vw,49px)] font-normal tracking-[-0.035em] text-white">Your team</h3>
            </div>
            <p className="mb-6 text-[18px] leading-[1.65] text-[#e6e8f4]">The people who run the business day to day. They need tools that are quick to learn and hard to get wrong.</p>
            <hr className="mb-6 border-white/10" />
            {items([["One place to work", "Bookings, jobs and records without switching tools."], ["Less manual effort", "Routine steps handled for them."], ["Clear oversight", "Managers see what is happening, as it happens."]])}
          </article>
          <article className={card}>
            <div className="mb-5 flex items-center gap-[22px]">
              <span className={iconWrap} aria-hidden>
                <svg width="30" height="26" viewBox="0 0 30 26" fill="none"><rect x="1.5" y="1.5" width="27" height="23" rx="7" stroke="#ff7ad9" strokeWidth="2" /><circle cx="10.5" cy="12" r="1.8" fill="#ff7ad9" /><circle cx="19.5" cy="12" r="1.8" fill="#ff7ad9" /></svg>
              </span>
              <h3 className="font-serif text-[clamp(34px,3.4vw,49px)] font-normal tracking-[-0.035em] text-white">Your customers</h3>
            </div>
            <p className="mb-6 text-[18px] leading-[1.65] text-[#e6e8f4]">The people you serve. They expect fast answers, simple ordering and honest updates.</p>
            <hr className="mb-6 border-white/10" />
            {items([["Easy to start", "Book, order or enquire in a few taps."], ["Always informed", "Status updates without having to call."], ["Consistent service", "The same quality every time they come back."]])}
          </article>
        </div>

        <svg viewBox="0 0 1080 166" preserveAspectRatio="none" className="hidden h-auto w-full max-w-[1080px] overflow-visible md:block" style={glow} aria-hidden>
          <defs>
            <linearGradient id="vc-bot" x1="0" y1="0" x2="1080" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ae6eff" /><stop offset="1" stopColor="#8f5ce2" /></linearGradient>
            <radialGradient id="vc-glow"><stop offset="0" stopColor="#d4a4ff" stopOpacity=".75" /><stop offset=".45" stopColor="#bf74ff" stopOpacity=".28" /><stop offset="1" stopColor="#8148cf" stopOpacity="0" /></radialGradient>
          </defs>
          <path d="M183.6,0 L183.6,82 M896.4,0 L896.4,82 M183.6,82 L896.4,82 M540,82 L540,152" stroke="url(#vc-bot)" strokeWidth="1.6" fill="none" opacity=".85" />
          <circle cx="540" cy="82" r="64" fill="url(#vc-glow)" />
          <circle cx="540" cy="82" r="37.5" fill="none" stroke="#975CE7" strokeOpacity=".35" />
          <circle cx="540" cy="82" r="51.5" fill="none" stroke="#975CE7" strokeOpacity=".35" />
          <circle cx="540" cy="82" r="14" fill="#D4A4FF" />
          <circle cx="540" cy="82" r="7" fill="#d4a4ff" />
          <circle cx="540" cy="152" r="6" fill="#c98cff" />
        </svg>

        <p className="mt-12 text-3xl font-semibold text-white md:mt-0 md:text-5xl">We build for <em className="font-serif text-[#d4a4ff]">both.</em></p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- usecases */
function UseCases() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 text-[#171717]">
      <div className="mx-auto grid max-w-[1520px] gap-12 px-5 md:px-10 lg:grid-cols-[420px_1fr]">
        <div>
          <div className="lg:sticky lg:top-[120px]">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9a60fb]">Platforms we have built</p>
            <h2 className="mt-3 text-4xl font-bold text-[#171717] md:text-5xl">Software for <em className="font-serif text-[#9a60fa]">real operations</em></h2>
            <ul className="mt-8 hidden lg:block">
              {USECASES.map((u, i) => (
                <li key={u.nav} className="border-b border-[#1717171a]">
                  <button type="button" onClick={() => refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className={`flex w-full items-center gap-3 py-4 text-left text-lg transition ${active === i ? "font-semibold text-[#171717]" : "text-[#1717177a] hover:text-[#171717]"}`}>
                    <span className={`h-6 w-1 rounded-full transition ${active === i ? "bg-[#9a60fa]" : "bg-transparent"}`} aria-hidden />
                    {u.nav}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          {USECASES.map((u, i) => (
            <article key={u.nav} data-i={i} ref={(el) => { refs.current[i] = el; }}
              className="rounded-[25px] border border-white/[.13] bg-[#130c23] bg-gradient-to-b from-[#130c23]/90 to-[#0c0819]/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,.28)] md:p-8">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full border border-[rgba(179,119,255,.54)] bg-[rgba(74,35,133,.28)] text-[#b794ff]" aria-hidden>
                  {(() => { const Icon = USECASE_ICONS[i]; return <Icon className="size-6" />; })()}
                </span>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#b794ff]">{u.kicker}</p>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{u.title}</h3>
              <p className="mt-3 text-white/70">{u.text}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]">
                <div className="rounded-[14px] border border-white/20 bg-[radial-gradient(circle_at_100%_0%,rgba(143,86,255,.22),transparent_60%)] p-4">
                  <p className="text-xs uppercase tracking-widest text-[#b794ff]">Built for</p>
                  <p className="mt-2 text-base font-semibold text-white">{u.audience}</p>
                </div>
                <ul className="grid content-center gap-3 sm:grid-cols-2">
                  {u.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#b794ff]" aria-hidden />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- process */
const PROCESS_ICONS = [Search, Database, Bot, Workflow];
function Process() {
  return (
    <section className="bg-[#020010] py-24">
      <div className="mx-auto max-w-[1520px] px-5 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#9a60fb]">How we work</p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-6xl">From first call to live system.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, k) => {
            const Icon = PROCESS_ICONS[k];
            return (
              <article key={p.n} className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[#a872d8]/30 bg-[#fefefe] p-7">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#b96cff]/0 via-[#b96cff]/[.09] to-[#b96cff]/30" aria-hidden />
                <div className="relative flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-[#eee3fb] text-[#b96cff]" aria-hidden><Icon className="size-6" /></span>
                  <span className="text-6xl font-extrabold leading-none text-[#e6defa]" aria-hidden>{p.n}</span>
                </div>
                <h3 className="relative mt-10 text-xl font-semibold text-[#171717]">{p.title}</h3>
                <p className="relative mt-2 text-[#171717]/70">{p.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- build */
function Build() {
  return (
    <section className="relative overflow-hidden bg-[#100a21] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_10%,rgba(154,96,250,.25),transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-[1520px] px-5 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#cab5ff]">What we build</p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-6xl">Tools that fit how you work</h2>
        <p className="mt-4 max-w-2xl text-white/70">Three areas where we help businesses get more done with less effort.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BUILD.map((g, k) => (
            <article key={g.title} className="flex flex-col rounded-[20px] border border-[#a872d8]/30 bg-[#100a21] p-8">
              <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#a000ff]/20 text-[#cab5ff]" aria-hidden>
                {(() => { const Icon = BUILD_ICONS[k]; return <Icon className="size-6" />; })()}
              </span>
              <h3 className="text-2xl font-semibold text-white">{g.title}</h3>
              <ul className="mt-5 space-y-3 text-white/75">
                {g.items.map((i) => <li key={i} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a000ff]" aria-hidden />{i}</li>)}
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-white">Discuss this <span className="text-[#a000ff]"><Arrow /></span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- faq */
function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#020010] py-24">
      <div className="mx-auto max-w-[960px] px-5">
        <h2 className="text-4xl font-bold text-[#f7f7f8] md:text-5xl">Frequently asked questions.</h2>
        <div className="mt-10 border-t border-white/[.08]">
          {FAQ.map((f, i) => (
            <div key={f.q} className="border-b border-white/[.08]">
              <h3>
                <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-white">
                  {f.q}
                  <span className="relative size-4 shrink-0" aria-hidden>
                    <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#9b66ff]" />
                    <span className={`absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#9b66ff] transition ${open === i ? "scale-y-0" : ""}`} />
                  </span>
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" hidden={open !== i} className="pb-5 text-[#aab1c0]">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24 lg:pb-[120px] lg:pt-[119px]">
      <div className="mx-auto max-w-[1520px] px-5 md:px-10">
        <div className="mx-auto flex min-h-0 max-w-[1265px] items-center justify-center overflow-hidden rounded-[10px] bg-[#17032c] md:min-h-[511px] bg-[radial-gradient(60%_90%_at_85%_30%,rgba(161,0,255,.5),transparent_70%),linear-gradient(110deg,#07000f_10%,#17032c_55%,#3a0a6b_100%)]">
          <div className="flex w-full max-w-[827px] flex-col items-center gap-4 px-5 py-14 text-center md:gap-5 md:p-0">
            <p className="text-xs font-bold uppercase leading-[1.19] tracking-[2.86px] text-[#cab5ff]">Start a conversation</p>
            <div className="flex w-full flex-col items-center gap-[18px] md:gap-[25px]">
              <h2 className="max-w-[702px] text-[clamp(34px,5.6vw,56px)] font-black leading-[1.14] text-white lg:text-[63px] lg:leading-[71px]">Have a project<br />in mind?</h2>
              <div className="flex w-full flex-col items-center gap-6 md:gap-8">
                <p className="text-base leading-7 text-white/80">Tell us about the work you want to simplify. We will reply on WhatsApp and take it from there.</p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group inline-flex h-14 w-full items-center justify-center gap-1.5 bg-[#f7e934] px-8 text-base font-bold text-[#151515] transition-colors hover:bg-[#ffef5c] focus-visible:bg-[#ffef5c] md:w-auto">
                  Chat with us on WhatsApp
                  <span className="inline-flex transition-transform group-hover:translate-x-[3px]" aria-hidden>
                    <svg width="14" height="11" viewBox="0 0 14.2 10.5629" fill="none"><path d="M13.7203 4.96699L9.25926 0.505948C9.09901 0.318825 8.81738 0.297012 8.63026 0.457299C8.44314 0.617547 8.42132 0.899171 8.58161 1.08629C8.59656 1.10374 8.61282 1.12003 8.63026 1.13494L12.3284 4.83761H0.796089C0.549736 4.83761 0.35 5.03734 0.35 5.28373C0.35 5.53012 0.549736 5.72982 0.796089 5.72982H12.3284L8.63026 9.428C8.44314 9.58825 8.42132 9.86987 8.58161 10.057C8.7419 10.2441 9.02348 10.2659 9.21061 10.1056C9.22805 10.0907 9.24434 10.0744 9.25926 10.057L13.7203 5.59595C13.8932 5.42201 13.8932 5.141 13.7203 4.96699Z" fill="currentColor" stroke="currentColor" strokeWidth="0.7" /></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- footer */
function Footer() {
  return (
    <footer className="bg-[#040507] pt-16">
      <div className="mx-auto max-w-[1520px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("afb-logo-white.png")} alt="" width={268} height={128} loading="lazy" className="h-10 w-auto" />
              <span className="text-base font-extrabold uppercase leading-[1.05] tracking-tight text-white">Automation<br />For Business</span>
            </span>
            <p className="mt-4 max-w-sm text-white/65">Software, web and AI solutions built around how your business works.</p>
            <ul className="mt-5 flex gap-3">
              {[["social-linkedin", "LinkedIn"], ["social-instagram", "Instagram"], ["social-facebook", "Facebook"]].map(([f, l]) => (
                <li key={l}><a aria-label={l} href="#top" className="flex size-10 items-center justify-center rounded-full border border-white/20 hover:border-[#a100ff]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img(`icons/footer/${f}.svg`)} alt="" className="h-4" /></a></li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FOOTER_COLS.map((c) => (
              <div key={c.title}>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{c.title}</h2>
                <ul className="space-y-2 text-sm text-white/65">{c.links.map((l) => <li key={l}><a href="#contact" className="hover:text-white">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 py-8 text-sm text-white/50">&copy; {new Date().getFullYear()} Automation For Business. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-[#0d0714] font-[family-name:var(--font-bt)] text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Visitors />
        <UseCases />
        <Process />
        <Build />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
