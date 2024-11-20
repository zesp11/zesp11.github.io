"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Toggle
      pressed={theme === "dark"}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="border dark:border-primary dark:bg-background"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Toggle>
  );
}
