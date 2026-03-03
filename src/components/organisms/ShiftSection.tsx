import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { shiftData } from "@/data/solutions";
import { Sparkles } from "lucide-react";

export function ShiftSection() {
  return (
    <SectionWrapper className="gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <Sparkles className="w-10 h-10 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          {shiftData.headline}
        </h2>
        <p className="mt-6 text-lg opacity-90 leading-relaxed">
          {shiftData.description}
        </p>
      </div>
    </SectionWrapper>
  );
}
