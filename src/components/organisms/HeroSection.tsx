import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroData } from "@/data/hero";
import heroImg from "@/assets/hero-dashboard.png";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-glow" />
      <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-accent/30 animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-xs font-semibold text-primary mb-6"
            >
              {heroData.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-hero md:text-hero-lg text-text-primary leading-tight"
            >
              {heroData.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-text-secondary leading-relaxed"
            >
              {heroData.subheadline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-sm text-text-secondary/70"
            >
              {heroData.trustText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/waitlist"
                className="gradient-primary text-primary-foreground px-7 py-3.5 rounded-2xl font-semibold text-base inline-flex items-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                {heroData.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="bg-card border border-border text-text-primary px-7 py-3.5 rounded-2xl font-semibold text-base inline-flex items-center gap-2 hover:bg-muted transition-all"
              >
                <Play className="w-4 h-4" />
                {heroData.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
              <img
                src={heroImg}
                alt="USAHAin Business Readiness Dashboard"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-card rounded-xl border border-border shadow-lg p-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-primary-foreground font-bold text-sm">78</div>
              <div>
                <div className="text-xs font-semibold text-text-primary">Skor Kesiapan</div>
                <div className="text-xs text-success font-medium">Siap Memulai!</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
