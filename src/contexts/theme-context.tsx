import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import { themeSettings } from "theme";

type ThemeContextProps = {
  theme: any;
  toggleColorMode: () => void;
  toggleMenu: any;
  menuToggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

interface MaterialThemeProviderProps {
  children: React.ReactNode;
}

type modeThemeProps = "dark" | "light";

const MaterialThemeProvider: React.FC<MaterialThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<modeThemeProps>("dark");
  const [toggled, setToggled] = useState<boolean>(false);

  const toggleColorMode = () =>
    setMode((prev: string) => (prev === "light" ? "dark" : "light"));
  const theme: any = useMemo(() => themeSettings(mode), [mode]);

  const menuToggleMode = () =>
    setToggled((prev: boolean) => (prev === false ? true : false));
  const toggleMenu = useMemo(() => toggled, [toggled]);

  const value = useMemo(
    () => ({
      theme,
      toggleColorMode,
      toggleMenu,
      menuToggleMode,
    }),
    [theme, toggleColorMode, toggleMenu, menuToggleMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// You can use the useContext hook to consume the context
const useCustomMaterialTheme = () => useContext(ThemeContext);

export { MaterialThemeProvider, useCustomMaterialTheme };
