"use client";

import React from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useDarkMode } from "usehooks-ts";
import { Button } from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const { toggle, isDarkMode } = useDarkMode();

  return (
    <Button
      onClick={toggle}
      isIconOnly
      aria-label="Theme Switch"
      variant="light"
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
