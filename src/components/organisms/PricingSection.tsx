import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { pricingData } from "@/data/pricing";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-muted/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          {pricingData.headline}
        </h2>
        <p className="mt-4 text-text-secondary text-lg">{pricingData.subheadline}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {pricingData.plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`relative rounded-2xl p-8 border ${
              plan.highlighted
                ? "gradient-primary text-primary-foreground border-transparent shadow-xl shadow-primary/20 scale-[1.02]"
                : "bg-card border-border"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            )}
            <div className="text-sm font-medium opacity-80">{plan.name}</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-sm opacity-70">{plan.period}</span>
            </div>
            <p className="mt-3 text-sm opacity-80">{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/waitlist"
              className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                plan.highlighted
                  ? "bg-primary-foreground text-primary"
                  : "gradient-primary text-primary-foreground"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
