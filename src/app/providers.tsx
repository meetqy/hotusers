"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useDarkMode } from "usehooks-ts";
import { cn } from "~/utils/cn";

export function Providers({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <main
          className={cn(
            "bg-background text-foreground",
            isDarkMode ? "dark" : "light",
          )}
        >
          {children}
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
