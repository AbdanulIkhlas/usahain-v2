import { Logo } from "@/components/atoms/Logo";
import { brandConfig } from "@/config/brand.config";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-sm text-text-secondary">{brandConfig.tagline}</span>
          </div>
          <div className="text-sm text-text-secondary">
            © {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
