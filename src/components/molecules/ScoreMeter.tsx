import { motion } from "framer-motion";

interface ScoreMeterProps {
  score?: number;
}

export function ScoreMeter({ score = 78 }: ScoreMeterProps) {
  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (score / 100) * circumference;
  const getColor = () => {
    if (score >= 75) return "rgb(var(--color-success))";
    if (score >= 50) return "rgb(var(--color-accent))";
    return "rgb(var(--color-accent))";
  };
  const getLabel = () => {
    if (score >= 75) return "Siap Memulai!";
    if (score >= 50) return "Hampir Siap";
    return "Perlu Persiapan";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-48 h-48">
        <svg className="w-48 h-48 -rotate-90" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="80" stroke="rgb(var(--color-border))" strokeWidth="12" fill="none" />
          <motion.circle
            cx="90" cy="90" r="80"
            stroke={getColor()}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-4xl font-extrabold text-text-primary"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {score}
          </motion.span>
          <span className="text-xs text-text-secondary mt-1">dari 100</span>
        </div>
      </div>
      <motion.div
        className="text-lg font-semibold"
        style={{ color: getColor() }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        {getLabel()}
      </motion.div>
    </div>
  );
}
