import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { metricsData } from "@/data/metrics";
import { CounterAnimation } from "@/components/molecules/CounterAnimation";
import { motion } from "framer-motion";

export function SocialProofSection() {
  return (
    <SectionWrapper id="partners">
      {/* Counters */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
        {metricsData.counters.map((c) => (
          <CounterAnimation key={c.label} target={c.value} suffix={c.suffix} label={c.label} />
        ))}
      </div>

      {/* Testimonials */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Kata Mereka
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {metricsData.testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
          >
            <p className="text-text-secondary text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                <div className="text-xs text-text-secondary">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
