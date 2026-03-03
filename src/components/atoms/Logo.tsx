import { brandConfig } from "@/config/brand.config";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold text-xl tracking-tight ${className}`}>
      <span className="text-primary">{brandConfig.name.slice(0, 5)}</span>
      <span className="text-accent">{brandConfig.name.slice(5)}</span>
    </span>
  );
}
