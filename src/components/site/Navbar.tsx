import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu01Icon, Cancel01Icon, ArrowDown01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import logo from "../../assets/newest-logo.png";

type NavItem = {
  label: string;
  href?: string;
  id?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Subsidiaries", href: "/subsidiaries" },
  {
    label: "Services",
    children: [
      { label: "Energy", href: "/services/energy" },
      { label: "Construction", href: "/services/construction" },
      { label: "Mining", href: "/services/mining" },
      { label: "Other Services", href: "/services/other-services" },
    ],
  },
  { label: "Careers", href: "/career", id: "careers" },
  { label: "Contact", href: "/contact", id: "contact" },
];

const searchIndex = [
  { title: "Home", path: "/", keywords: ["home", "landing", "sevengate", "group"] },
  { title: "About Us", path: "/about", keywords: ["about", "vision", "mission", "history"] },
  { title: "CEO Message", path: "/about/ceo", keywords: ["ceo", "founder", "message", "leadership"] },
  { title: "Organization", path: "/about/organization", keywords: ["organization", "structure", "team"] },
  { title: "Subsidiaries", path: "/subsidiaries", keywords: ["subsidiaries", "companies", "terre cruste"] },
  { title: "Oil & Gas", path: "/services/oil-and-gas", keywords: ["oil", "gas", "petroleum", "oem"] },
  { title: "Power", path: "/services/power", keywords: ["power", "electricity", "generation", "turbines"] },
  { title: "Construction", path: "/services/construction", keywords: ["construction", "infrastructure", "civil", "epc"] },
  { title: "Mining", path: "/services/mining", keywords: ["mining", "minerals", "solid minerals", "extraction"] },
  { title: "Other Services", path: "/services/other-services", keywords: ["other", "services", "lpg", "corrosion", "specialised"] },
  { title: "Careers", path: "/career", keywords: ["careers", "jobs", "vacancies", "hiring"] },
  { title: "Contact Us", path: "/contact", keywords: ["contact", "email", "phone", "address"] },
];

const MobileNavItem = ({ item, level = 0, setOpen, handleNavClick, activeId }: { item: NavItem, level?: number, setOpen: any, handleNavClick: any, activeId: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = item.id ? activeId === item.id : false;
  
  if (item.children) {
    return (
      <div className={`flex flex-col ${level === 0 ? 'border-b border-border/50 last:border-0 py-2' : ''}`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex w-full items-center justify-between ${level === 0 ? 'py-3 text-lg font-serif font-bold uppercase tracking-widest text-foreground hover:text-accent' : 'py-2 pl-4 text-sm font-sans font-semibold tracking-wide text-muted-foreground hover:text-foreground'} transition-colors ${isExpanded && level === 0 ? 'text-accent' : ''}`}
        >
          {item.label}
          <HugeiconsIcon icon={ArrowDown01Icon} className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} strokeWidth={1.5} />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className={`flex flex-col gap-1 ${level === 0 ? 'py-2' : ''}`}>
                {item.children.map((child) => (
                  <MobileNavItem key={child.label} item={child} level={level + 1} setOpen={setOpen} handleNavClick={handleNavClick} activeId={activeId} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  const linkClass = level === 0 
    ? `block px-2 py-3 text-lg font-serif font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`
    : `block px-2 py-2 pl-4 text-sm font-sans font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground`;

  return (
    <div className={level === 0 ? 'border-b border-border/50 last:border-0 py-2' : ''}>
      {item.href?.startsWith("/#") || item.href?.startsWith("#") ? (
        <a
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href!.replace("/", ""))}
          aria-current={isActive ? "true" : undefined}
          className={linkClass}
        >
          {item.label}
        </a>
      ) : (
        <Link
          to={item.href!}
          onClick={() => setOpen(false)}
          className={linkClass}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isDarkHeroPage = false; // location.pathname.startsWith("/contact");
  const forceLightNav = !isDarkHeroPage;
  const isLight = forceLightNav || scrolled;

  const searchResults = searchQuery.trim() === "" ? [] : searchIndex.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .filter((n) => n.id)
      .map((n) => document.getElementById(n.id!))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = id ? document.getElementById(id) : document.documentElement;
    if (!el) return;
    e.preventDefault();
    const top =
      id === ""
        ? 0
        : el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", href);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex w-full transition-all duration-500 ${scrolled ? "pt-0" : "pt-0"
        }`}
    >
      <nav
        aria-label="Primary"
        className={`flex h-20 md:h-28 w-full items-center justify-between px-6 lg:px-12 transition-all duration-300 ${isLight
          ? "bg-background/95 border-b border-border backdrop-blur-xl"
          : "bg-transparent border-transparent"
          }`}
        onMouseLeave={() => setHoveredLabel(null)}
      >
        {/* Left Section - Contact Us on Desktop, Logo on Mobile */}
        <div className="flex flex-1 items-center justify-start">
          <Link
            to="/"
            className="flex items-center justify-center md:hidden"
          >
            <img src={logo} alt="Sevengate Logo" className="h-16 w-auto object-contain transition-all duration-300" />
          </Link>
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className={`hidden md:inline-flex items-center text-sm font-serif font-bold tracking-widest uppercase transition-colors duration-500 ${isLight ? "text-foreground hover:text-accent" : "text-white hover:text-white/80"}`}
          >
            <span className="mr-1.5 text-xl font-bold leading-none">+</span> Contact Us
          </a>
        </div>

        {/* Center Section - Logo on Desktop */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <Link
            to="/"
            className="flex items-center justify-center"
          >
            <img src={logo} alt="Sevengate Logo" className="h-20 md:h-28 w-auto object-contain transition-all duration-300" />
          </Link>
        </div>

        {/* Right Section - Icons & Menu */}
        <div className={`flex flex-1 items-center justify-end gap-4 md:gap-6 ${isLight ? "text-foreground" : "text-white"}`}>
          <div className="relative flex items-center">
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out border-b ${isSearchOpen ? 'w-32 md:w-48 border-current opacity-100 mr-2' : 'w-0 border-transparent opacity-0'
                }`}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none placeholder:text-current/50 px-2 py-1 text-sm md:text-base"
                onBlur={() => setTimeout(() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }, 200)}
              />
            </div>
            <button
              aria-label="Search"
              className="hover:text-accent transition-colors z-10"
              onClick={() => {
                setSearchOpen(!isSearchOpen);
                if (isSearchOpen) setSearchQuery("");
              }}
            >
              <HugeiconsIcon icon={Search01Icon} className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.2} />
            </button>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchQuery && (
              <div className="absolute top-full right-0 mt-2 w-48 md:w-64 bg-background border border-border shadow-lg overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  <ul className="py-2">
                    {searchResults.map((result, idx) => (
                      <li key={idx}>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-white transition-colors"
                          onClick={() => {
                            navigate({ to: result.path });
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                        >
                          {result.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-sm text-muted-foreground text-center">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="ml-2 flex items-center gap-2 hover:text-accent transition-colors"
          >
            {open ? <HugeiconsIcon icon={Cancel01Icon} className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2.5} /> : <HugeiconsIcon icon={Menu01Icon} className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2.5} />}
            <span className="hidden md:block text-sm font-serif font-bold tracking-widest uppercase">Menu</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[101] w-full max-w-sm bg-background border-l border-border p-6 md:p-8 overflow-y-auto flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-display text-xl font-bold uppercase tracking-widest text-foreground">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 -mr-2"
                >
                  <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              <ul className="flex flex-col gap-2 flex-grow">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <MobileNavItem item={item} setOpen={setOpen} handleNavClick={handleNavClick} activeId={activeId} />
                  </li>
                ))}
              </ul>

              {/* <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-between bg-foreground px-6 py-4 text-sm font-sans font-bold tracking-widest uppercase text-background transition-colors hover:bg-accent"
                >
                  Partner with us
                  <HugeiconsIcon icon={ArrowRight01Icon} className="h-5 w-5" strokeWidth={1.5} />
                </Link>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
