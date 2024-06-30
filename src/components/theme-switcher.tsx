"use client";

import React from "react";
import { Icon } from "@iconify/react";
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
      {isDarkMode ? (
        <Icon icon={"lucide:sun"} className="h-6 w-6" />
      ) : (
        <Icon icon={"lucide:moon"} className="h-6 w-6" />
      )}
    </Button>
  );
};
