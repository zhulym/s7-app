import { createTheme, PaletteMode } from "@mui/material";
import { useMemo, useState } from "react";
import { themeSettings } from "theme";

export const useThemeMode = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(() => ({
    // The dark mode switch would invoke this method
    toggleColorMode: () => setMode((prev: PaletteMode) => (prev === "light" ? "dark" : "light")),
  }), []);

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
