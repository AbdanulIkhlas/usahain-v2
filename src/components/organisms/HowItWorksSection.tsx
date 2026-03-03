import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { howItWorksData } from "@/data/solutions";

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          {howItWorksData.headline}
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {howItWorksData.steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Step number */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-extrabold relative z-10 shadow-lg shadow-primary/20">
              {step.step}
            </div>
            {/* Content */}
            <div className={`flex-1 bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow ${
              i % 2 !== 0 ? "md:text-right" : ""
            }`}>
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-text-secondary">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
