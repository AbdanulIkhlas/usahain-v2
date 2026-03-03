import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { ScoreMeter } from "@/components/molecules/ScoreMeter";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Shield } from "lucide-react";

export function ScorePreviewSection() {
  return (
    <SectionWrapper className="bg-muted/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Skor Kesiapan Bisnis
        </h2>
        <p className="mt-4 text-text-secondary text-lg">
          Lihat seberapa siap rencana bisnismu sebelum menginvestasikan modal.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        <ScoreMeter score={78} />

        <div className="space-y-6">
          {[
            { icon: CheckCircle, label: "Modal Terencana", desc: "Estimasi modal sudah sesuai jenis usaha" },
            { icon: TrendingUp, label: "Partner Terpilih", desc: "Supplier dan booth sudah dikurasi" },
            { icon: Shield, label: "Risiko Terukur", desc: "Potensi kerugian sudah diminimalkan" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="font-semibold text-text-primary">{item.label}</div>
                <div className="text-sm text-text-secondary">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
