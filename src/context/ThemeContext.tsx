/**
 * ================================
 * 🎨 THEME CONTEXT PROVIDER
 * Manages runtime theme switching.
 * Loads theme tokens and applies CSS variables to :root.
 * Persists selection in localStorage.
 * ================================
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

import defaultTokens from "@/theme/tokens/default.json";
import darkTokens from "@/theme/tokens/dark.json";
import corporateTokens from "@/theme/tokens/corporate.json";
import greenGrowthTokens from "@/theme/tokens/greenGrowth.json";

export type ThemeName = "default" | "dark" | "corporate" | "greenGrowth";

export interface ThemeTokens {
  primary: string;
  primaryLight: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
  success: string;
  successLight: string;
  background: string;
  card: string;
  muted: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  ring: string;
}

const themeMap: Record<ThemeName, ThemeTokens> = {
  default: defaultTokens as ThemeTokens,
  dark: darkTokens as ThemeTokens,
  corporate: corporateTokens as ThemeTokens,
  greenGrowth: greenGrowthTokens as ThemeTokens,
};

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  tokens: ThemeTokens;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyTokens(tokens: ThemeTokens) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => {
    // Convert camelCase to kebab-case for CSS variable naming
    const cssKey = key.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
    root.style.setProperty(`--color-${cssKey}`, value);
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("usahain-theme") as ThemeName) || "default";
    }
    return "default";
  });

  const tokens = themeMap[theme];

  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem("usahain-theme", newTheme);
  }, []);

  useEffect(() => {
    applyTokens(tokens);
  }, [tokens]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, tokens }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
