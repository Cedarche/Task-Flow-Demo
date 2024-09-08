"use client"; // This is necessary because the theme toggle will involve client-side interactivity.
import { useTheme } from "next-themes";
import { SidebarItem, SidebarLabel } from "./catalyst/sidebar";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarItem
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}

      <SidebarLabel>Change theme</SidebarLabel>
    </SidebarItem>
  );
}
