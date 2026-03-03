import { useTheme, type ThemeName } from "@/context/ThemeContext";
import { Palette } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const themes: { value: ThemeName; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "dark", label: "Dark" },
  { value: "corporate", label: "Corporate" },
  { value: "greenGrowth", label: "Green Growth" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-muted transition-colors text-text-secondary hover:text-text-primary"
        aria-label="Switch theme"
      >
        <Palette className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-xl py-1 min-w-[160px] z-50">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => { setTheme(t.value); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted ${
                theme === t.value ? "text-primary font-semibold" : "text-text-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
