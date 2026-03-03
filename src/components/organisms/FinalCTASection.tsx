import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-[0.03]" />
      <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-glow" />
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-text-primary max-w-xl mx-auto leading-tight"
        >
          Berhenti Nebak. Mulai Merencanakan.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-text-secondary max-w-md mx-auto"
        >
          Bergabung dengan ribuan calon pengusaha yang sudah memilih cara cerdas untuk memulai bisnis.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Link
            to="/waitlist"
            className="gradient-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/25"
          >
            Gabung Waitlist Sekarang
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xs text-text-secondary"
        >
          🔒 Gratis. Tanpa kartu kredit. Kuota terbatas.
        </motion.p>
      </div>
    </section>
  );
}
