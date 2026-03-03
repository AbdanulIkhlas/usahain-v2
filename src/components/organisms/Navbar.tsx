import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/atoms/Logo";
import { ThemeSwitcher } from "@/components/molecules/ThemeSwitcher";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Partners", href: "/#partners" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setVisible(current < lastScroll.current || current < 50);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <Link to="/" className="z-10">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href.startsWith("/#") ? "/" : item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <ThemeSwitcher />
            <Link
              to="/waitlist"
              className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-primary z-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-text-primary/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-card border-l border-border z-50 md:hidden p-6 flex flex-col"
            >
              <div className="mt-16 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href.startsWith("/#") ? "/" : item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-lg font-medium text-text-primary hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/waitlist"
                  className="gradient-primary text-primary-foreground px-5 py-3 rounded-xl text-center font-semibold mt-4"
                >
                  Join Waitlist
                </Link>
                <div className="mt-4">
                  <ThemeSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
