import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { problemData } from "@/data/problem";

export function ProblemSection() {
  return (
    <SectionWrapper className="bg-muted/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          {problemData.headline}
        </h2>
        <p className="mt-4 text-text-secondary text-lg">{problemData.subheadline}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problemData.problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group"
          >
            <div className="text-4xl mb-4">{p.icon}</div>
            <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
