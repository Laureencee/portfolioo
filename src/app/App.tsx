import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Play, Instagram, Facebook } from "lucide-react";
import video01 from "@/imports/01.mp4";
import video02 from "@/imports/02.mp4";
import imgEasy from "@/imports/EasY_Installation.png";
import imgParagraph from "@/imports/Paragraph_2.png";
import imgPatchwork from "@/imports/Patchwork.png";
import imgVarieties from "@/imports/Varieties.png";
import imgSM1 from "@/imports/1.png";
import imgSM3 from "@/imports/3.png";
import imgSM4 from "@/imports/4.png";
import imgSM5 from "@/imports/5.png";
import imgSM6 from "@/imports/6.png";
import imgSM7 from "@/imports/7.png";
import imgSM8 from "@/imports/8.png";
import imgSM9 from "@/imports/9.png";
import imgMacbook from "@/imports/MacBook_Pro_16.png";

const ecommerceWork = [
  { src: imgParagraph, alt: "Slamming No More — product ad" },
  { src: imgVarieties, alt: "Varieties — product showcase" },
  { src: imgEasy, alt: "Screw Installation — instruction graphic" },
  { src: imgPatchwork, alt: "Patchwork — product collage" },
];

const socialMediaWork = [
  { src: imgSM1, alt: "Emergency Call Out — social post" },
  { src: imgSM3, alt: "Sydney Power Group service areas" },
  { src: imgSM4, alt: "Social media graphic 4" },
  { src: imgSM5, alt: "Social media graphic 5" },
  { src: imgSM6, alt: "Social media graphic 6" },
  { src: imgSM7, alt: "Social media graphic 7" },
  { src: imgSM8, alt: "Social media graphic 8" },
  { src: imgSM9, alt: "Social media graphic 9" },
  { src: imgMacbook, alt: "Website mockup on MacBook Pro" },
];

const works = [
  {
    id: 1,
    num: "01",
    title: "Video Editing",
    category: "Creative Production",
    badge: "★ FEATURED",
    description:
      "Crafting compelling video content that drives engagement across social platforms. From raw footage to polished, story-driven edits — reels, short-form content, transitions, and color grading optimized for every format and audience.",
    tags: ["Reels", "Short-form", "Color Grading", "Transitions", "YouTube"],
    accent: "#F9D34A",
    icon: <Play size={18} fill="currentColor" />,
    software: [
      { name: "Premiere Pro", icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" },
      { name: "After Effects", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" },
      { name: "DaVinci Resolve", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" },
      { name: "CapCut", icon: "https://sf16-sg.tiktokcdn.com/obj/eden-sg/uhtyvuhn7nulogpoguhm/capcut-icon-2.svg" },
    ],
  },
  {
    id: 2,
    num: "02",
    title: "Graphic Design",
    category: "Visual Identity",
    description:
      "Creating engaging, innovative, and visually striking designs for print, digital, and social platforms. Brand-consistent layouts with maximum visual impact and readability.",
    tags: ["Branding", "Social Media", "Print", "Layouts"],
    accent: "#ffffff",
    software: [
      { name: "Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
      { name: "Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
      { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
      { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    ],
  },
  {
    id: 3,
    num: "03",
    title: "SEO Optimization",
    category: "Digital Growth",
    description:
      "Optimizing copy, landing pages, and content for organic search success. Keyword discovery, on-page SEO, WordPress implementation, Google My Business, and press release publishing via Signal Genesys.",
    tags: ["On-page SEO", "Keyword Research", "WordPress", "Content Writing"],
    accent: "#F9D34A",
    software: [
      { name: "Ahrefs", icon: "https://cdn.worldvectorlogo.com/logos/ahrefs-1.svg" },
      { name: "SEMrush", icon: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg" },
      { name: "Google Analytics", icon: "https://www.svgrepo.com/show/303251/google-analytics-logo.svg" },
      { name: "WordPress", icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
    ],
  },
  {
    id: 4,
    num: "04",
    title: "Social Media Management",
    category: "Community & Strategy",
    description:
      "Developing and executing comprehensive social media strategies aligned with organizational goals. Creating multi-format content, nurturing communities, and making data-driven decisions from analytics.",
    tags: ["Strategy", "Content Creation", "Analytics", "Community"],
    accent: "#ffffff",
    software: [
      { name: "Meta Business Suite", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
      { name: "Hootsuite", icon: "https://cdn.worldvectorlogo.com/logos/hootsuite-1.svg" },
      { name: "Buffer", icon: "https://cdn.worldvectorlogo.com/logos/buffer.svg" },
      { name: "Trello", icon: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
    ],
  },
  {
    id: 5,
    num: "05",
    title: "Logo & Brand Design",
    category: "Identity Systems",
    description:
      "Designing memorable logos and brand identities that communicate character and drive recognition. Ensuring consistency across all brand touchpoints from digital to print.",
    tags: ["Logo Design", "Brand Identity", "Typography", "Visual Systems"],
    accent: "#F9D34A",
    software: [
      { name: "Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
      { name: "Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
      { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
      { name: "InDesign", icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" },
    ],
  },
];

const experience = [
  {
    role: "Customer Support",
    company: "Shopify",
    period: "Oct 2024 – Jun 2025",
    desc: "Catered to customer needs and questions. Actively learned ecommerce to understand customer perspectives and solve problems quickly.",
  },
  {
    role: "SEO Specialist",
    company: "Peak Ranking Solutions",
    period: "Apr 2023 – Apr 2024",
    desc: "Optimized copy and landing pages for SEO. Implemented WordPress sites, managed Google My Business, and published press releases via Signal Genesys.",
  },
  {
    role: "Social Media Manager / Content Writer",
    company: "Twitter",
    period: "Jun 2022 – Jan 2025",
    desc: "Developed comprehensive social media strategies. Created multi-format content, engaged communities, and tracked performance metrics.",
  },
  {
    role: "Graphic Designer",
    company: "FB · X · IG",
    period: "Jun 2022 – Jan 2025",
    desc: "Created visually striking designs for print, digital, and social. Ensured brand consistency and collaborated with teams to hit project goals.",
  },
  {
    role: "Collaboration Manager",
    company: "Twitter",
    period: "Jun 2022 – Nov 2023",
    desc: "Managed influencer and community collaborations. Drove cross-platform traffic and facilitated social media ads and posting partnerships.",
  },
];

const skills = [
  "Video Editing", "Graphic Design", "SEO Optimization",
  "Social Media Management", "Logo Design", "Social Media Design",
  "WordPress", "Google Suite", "Trello",
  "Customer Service", "Content Writing",
];

const softSkills = [
  { label: "Work with Pressure", pct: 90 },
  { label: "Critical Thinking", pct: 88 },
  { label: "Problem Solving", pct: 85 },
  { label: "Communication", pct: 92 },
  { label: "Teamwork", pct: 95 },
  { label: "Research", pct: 82 },
];

function Nav() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
        <div className="w-10 h-10 border-2 border-primary bg-white flex items-center justify-center">
          <span className="font-[Barlow_Condensed] font-black text-primary text-sm tracking-tighter leading-none">LB</span>
        </div>
        <div className="flex gap-[3px] items-center">
          {[0,1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary" />)}
        </div>
      </div>
      <div className="flex items-center gap-8">
        {[["WORKS","works"],["ABOUT","about"],["CONTACT","contact"]].map(([label,id]) => (
          <button key={id} onClick={() => scrollTo(id)}
            className="font-[Barlow_Condensed] font-bold text-sm tracking-widest text-primary opacity-70 hover:opacity-100 transition-opacity uppercase">
            {label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {[Facebook, Instagram].map((Icon, i) => (
          <button key={i} className="w-8 h-8 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200">
            <Icon size={13} />
          </button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-4 border-2 border-primary/20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 pt-24 pb-28 max-w-4xl mx-auto w-full">
        <p className="font-[Barlow_Condensed] font-bold text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-primary/70 mb-4 sm:mb-6 uppercase">
          — Virtual Assistant · SEO Specialist · Creative
        </p>

        <h1
          className="font-[Barlow_Condensed] font-black text-foreground leading-[0.88] uppercase mb-4 w-full"
          style={{ fontSize: "clamp(3rem, 14vw, 10rem)" }}
        >
          Laurence<br />Bayhonan
        </h1>

        <p className="font-[Barlow_Condensed] font-bold text-foreground/50 tracking-wider text-xs sm:text-sm uppercase mb-6 sm:mb-8 px-2">
          Graphic Designer · SEO Specialist · Video Editor · Social Media Manager
        </p>

        <p className="font-[Barlow] text-foreground/75 text-base sm:text-lg leading-relaxed max-w-sm sm:max-w-md mb-8 sm:mb-10">
          A flexible Virtual Assistant dedicated to meeting the needs of clients across creative and digital industries.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button onClick={() => scrollTo("works")}
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-[Barlow_Condensed] font-bold tracking-widest text-sm px-7 py-4 hover:bg-primary/90 transition-colors uppercase w-full sm:w-auto justify-center">
            View Works
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 font-[Barlow_Condensed] font-bold tracking-widest text-sm text-primary/70 hover:text-primary transition-colors uppercase border-b border-primary/30 pb-1">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Ticker */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 22s linear infinite; }
      `}</style>
      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-primary/20 overflow-hidden">
        <div className="marquee-track flex items-center w-max">
          {[...skills, ...skills].map((s, i) => (
            <div key={i} className="flex-none flex items-center gap-6 px-6 py-4 font-[Barlow_Condensed] font-bold text-xs tracking-widest text-primary/60 uppercase whitespace-nowrap">
              {s}
              <span className="w-1 h-1 rounded-full bg-primary/30 flex-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageGrid({ images, accent, onOpen }: { images: { src: string; alt: string }[]; accent: string; onOpen: (src: string) => void }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative overflow-hidden group cursor-zoom-in bg-white/10"
          style={{ aspectRatio: "1/1" }}
          onClick={() => onOpen(img.src)}
        >
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
            style={{ backgroundColor: "rgba(27,31,59,0.45)" }}>
            <ArrowUpRight size={18} style={{ color: accent }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function GraphicDesignGallery({ accent }: { accent: string }) {
  const [tab, setTab] = useState<"social" | "ecommerce">("social");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tabs: { key: "social" | "ecommerce"; label: string }[] = [
    { key: "social", label: "Social Media Design" },
    { key: "ecommerce", label: "Ecommerce Design" },
  ];

  return (
    <>
      {/* Tab switcher */}
      <div className="flex gap-0 mt-4 mb-3 border border-white/20 w-fit">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
            style={{
              backgroundColor: tab === t.key ? accent : "transparent",
              color: tab === t.key ? "#1B1F3B" : `${accent}80`,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          <ImageGrid
            images={tab === "social" ? socialMediaWork : ecommerceWork}
            accent={accent}
            onOpen={setLightbox}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Design work"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-5 right-6 font-[Barlow_Condensed] font-black text-white/60 hover:text-white text-2xl"
              onClick={() => setLightbox(null)}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function VideoCard({ src, label, accent }: { src: string; label: string; accent: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { ref.current.play(); setPlaying(true); }
  };

  return (
    <div className="relative group cursor-pointer overflow-hidden" style={{ aspectRatio: "9/16", maxHeight: 320 }} onClick={toggle}>
      <video
        ref={ref}
        src={src}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-200 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
        style={{ backgroundColor: "rgba(27,31,59,0.55)" }}>
        <div className="w-12 h-12 flex items-center justify-center border-2 mb-3"
          style={{ borderColor: accent }}>
          <Play size={18} fill={accent} color={accent} />
        </div>
        <span className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase"
          style={{ color: accent }}>{label}</span>
      </div>
    </div>
  );
}

function WorksSection() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive(a => (a + 1) % works.length), 3200);
    return () => clearInterval(t);
  }, [auto]);

  const w = works[active];

  return (
    <section id="works" className="bg-background py-28 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b-2 border-primary/20 pb-8">
          <div>
            <p className="font-[Barlow_Condensed] font-bold text-sm tracking-[0.3em] text-primary/60 uppercase mb-3">What I Do</p>
            <h2 className="font-[Barlow_Condensed] font-black text-foreground uppercase leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
              Works
            </h2>
          </div>
          <span className="font-[Barlow_Condensed] font-bold text-primary/40 text-sm tracking-widest uppercase">2022 – 2025</span>
        </div>

        {/* Featured highlight panel */}
        <div className="mb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-primary p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start"
            >
              <div className="flex-none">
                <span
                  className="font-[Barlow_Condensed] font-black leading-none block"
                  style={{ fontSize: "clamp(5rem, 10vw, 9rem)", color: w.accent, opacity: 0.25 }}
                >
                  {w.num}
                </span>
              </div>
              <div className="flex-1">
                {w.badge && (
                  <span className="inline-block font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase px-3 py-1 mb-4"
                    style={{ backgroundColor: w.accent, color: "#1B1F3B" }}>
                    {w.badge}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  {w.icon && (
                    <span style={{ color: w.accent }}>{w.icon}</span>
                  )}
                  <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase"
                    style={{ color: `${w.accent}80` }}>
                    {w.category}
                  </p>
                </div>
                <h3
                  className="font-[Barlow_Condensed] font-black text-primary-foreground uppercase leading-none mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  {w.title}
                </h3>
                <p className="font-[Barlow] text-primary-foreground/70 leading-relaxed max-w-xl mb-8 text-base">
                  {w.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-8">
                  {w.tags.map(tag => (
                    <span key={tag}
                      className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase px-3 py-1"
                      style={{ border: `1px solid ${w.accent}40`, color: w.accent }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Software Proficiency */}
                {w.software && (
                  <div className="mb-8">
                    <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-primary-foreground/50 mb-3">
                      Software Proficiency
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {w.software.map((soft) => (
                        <div
                          key={soft.name}
                          className="flex items-center gap-2 px-3 py-2 border border-primary-foreground/15 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-200"
                          title={soft.name}
                        >
                          <img
                            src={soft.icon}
                            alt={soft.name}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <span className="font-[Barlow_Condensed] font-bold text-xs tracking-wider uppercase text-primary-foreground/70">
                            {soft.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {w.id === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {[video01, video02].map((src, i) => (
                      <VideoCard key={i} src={src} label={`Edit ${String(i + 1).padStart(2, "0")}`} accent={w.accent} />
                    ))}
                  </div>
                )}

                {w.id === 2 && (
                  <GraphicDesignGallery accent={w.accent} />
                )}
              </div>
              <div className="hidden md:flex flex-none items-center justify-center w-16 h-16 border-2 self-center"
                style={{ borderColor: `${w.accent}40` }}>
                <ArrowUpRight size={24} style={{ color: w.accent }} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical list — click to highlight */}
        <div className="divide-y divide-primary/15 border-y border-primary/15">
          {works.map((item, i) => (
            <button
              key={item.id}
              onClick={() => { setActive(i); setAuto(false); }}
              className="w-full text-left group flex items-center gap-6 py-5 px-4 transition-all duration-200"
              style={{ backgroundColor: active === i ? "rgba(27,31,59,0.06)" : "transparent" }}
            >
              <span
                className="font-[Barlow_Condensed] font-black text-2xl flex-none transition-colors duration-200"
                style={{ color: active === i ? "#1B1F3B" : "rgba(27,31,59,0.25)" }}
              >
                {item.num}
              </span>
              <span
                className="font-[Barlow_Condensed] font-black uppercase leading-none flex-1 transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                  color: active === i ? "#1B1F3B" : "rgba(27,31,59,0.35)",
                }}
              >
                {item.title}
              </span>
              <span
                className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase hidden md:block transition-colors"
                style={{ color: active === i ? "rgba(27,31,59,0.6)" : "rgba(27,31,59,0.2)" }}
              >
                {item.category}
              </span>
              <div
                className="w-8 h-8 flex items-center justify-center flex-none transition-all duration-200"
                style={{
                  backgroundColor: active === i ? "#1B1F3B" : "transparent",
                  border: `1px solid ${active === i ? "#1B1F3B" : "rgba(27,31,59,0.2)"}`,
                }}
              >
                <ArrowUpRight size={14} style={{ color: active === i ? "#ffffff" : "rgba(27,31,59,0.3)" }} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="about" className="bg-background py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b-2 border-primary/20 pb-8">
          <div>
            <p className="font-[Barlow_Condensed] font-bold text-sm tracking-[0.3em] text-primary/60 uppercase mb-3">Background</p>
            <h2 className="font-[Barlow_Condensed] font-black text-foreground uppercase leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
              Experience
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experience list */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-primary/15">
              {experience.map((e, i) => (
                <motion.div key={i}
                  className="group py-8 flex gap-6"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span className="font-[Barlow_Condensed] font-black text-foreground/15 text-3xl flex-none w-10 text-right pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="font-[Barlow_Condensed] font-black text-foreground uppercase leading-tight"
                        style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}>
                        {e.role}
                      </h3>
                      <span className="font-[Barlow_Condensed] font-bold text-xs tracking-widest text-foreground/40 uppercase whitespace-nowrap pt-1">
                        {e.period}
                      </span>
                    </div>
                    <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-secondary-foreground mb-3"
                      style={{ color: "#1B1F3B", opacity: 0.5 }}>
                      {e.company}
                    </p>
                    <p className="font-[Barlow] text-foreground/65 text-sm leading-relaxed">{e.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-16 pt-12 border-t-2 border-primary/20">
              <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-primary/50 mb-8">Education</p>
              {[
                {
                  degree: "BS Metallurgical Engineering",
                  school: "Mindanao State University – IIT",
                  period: "2021 – Present",
                  note: "Dean's Lister Awardee",
                },
                {
                  degree: "Science, Technology, Engineering & Math",
                  school: "La Salle Academy",
                  period: "2015 – 2021",
                  note: "With High Honors · School Athlete (Swimming)",
                },
              ].map((edu, i) => (
                <div key={i} className="flex gap-6 mb-8">
                  <span className="font-[Barlow_Condensed] font-black text-foreground/15 text-3xl flex-none w-10 text-right">{String(i+1).padStart(2,"0")}</span>
                  <div>
                    <h4 className="font-[Barlow_Condensed] font-black text-foreground uppercase text-xl leading-tight mb-1">{edu.degree}</h4>
                    <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-foreground/40 mb-2">{edu.school} · {edu.period}</p>
                    <p className="font-[Barlow] text-foreground/55 text-sm">{edu.note}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8 border border-primary/20 p-6 inline-block">
                <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-foreground/40 mb-2">Certification</p>
                <p className="font-[Barlow_Condensed] font-black text-foreground uppercase text-lg leading-tight">SEVEN Studio's Graphic Design Training Program</p>
                <p className="font-[Barlow] text-foreground/50 text-sm mt-1">SEVEN Studios Home Office · May 12, 2023</p>
              </div>
            </div>
          </div>

          {/* Skills sidebar */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l-2 border-primary/20">
            <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-primary/50 mb-8">Applied Skills</p>
            <div className="space-y-5 mb-12">
              {softSkills.map(s => (
                <div key={s.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-[Barlow_Condensed] font-bold text-sm tracking-wider uppercase text-foreground/75">{s.label}</span>
                    <span className="font-[Barlow_Condensed] font-bold text-xs text-foreground/40">{s.pct}%</span>
                  </div>
                  <div className="h-1 bg-primary/15 w-full">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-primary/50 mb-6">Tools & Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s}
                  className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase px-3 py-2 border border-primary/25 text-foreground/65 hover:border-primary hover:text-foreground transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-primary/20">
              {[
                { num: "3+", label: "Years Active" },
                { num: "10+", label: "Roles Held" },
                { num: "12+", label: "Skills" },
                { num: "Dean's", label: "List Awardee" },
              ].map(stat => (
                <div key={stat.label} className="bg-background p-6 text-center">
                  <div className="font-[Barlow_Condensed] font-black text-foreground leading-none mb-1"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                    {stat.num}
                  </div>
                  <div className="font-[Barlow_Condensed] font-bold text-xs tracking-widest uppercase text-foreground/45">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-background py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary p-12 md:p-20 flex flex-col items-center text-center gap-8">
          <p className="font-[Barlow_Condensed] font-bold text-sm tracking-[0.3em] text-primary-foreground/40 uppercase">
            — You can find me here
          </p>
          <h2 className="font-[Barlow_Condensed] font-black text-primary-foreground uppercase leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            Get In<br />Touch.
          </h2>
          <p className="font-[Barlow] text-primary-foreground/60 text-lg leading-relaxed max-w-md">
            Open to freelance, remote work, and new opportunities. Let's build something great together.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a href="mailto:laurencemaquilingbayhonan@gmail.com"
              className="group inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-[Barlow_Condensed] font-bold tracking-widest text-sm px-10 py-5 hover:bg-secondary/90 transition-colors uppercase">
              <Mail size={15} />
              laurencemaquilingbayhonan@gmail.com
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-6 font-[Barlow_Condensed] font-bold text-sm text-primary-foreground/50 tracking-wider">
              <span className="flex items-center gap-2"><Phone size={13} /> 09356271162</span>
              <span className="flex items-center gap-2"><MapPin size={13} /> Iligan City, Philippines</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            {[Facebook, Instagram].map((Icon, i) => (
              <button key={i}
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all duration-200">
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-background" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <Nav />
      <HeroSection />
      <WorksSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}