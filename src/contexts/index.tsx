import { MaterialThemeProvider } from "./theme-context";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <MaterialThemeProvider>{children}</MaterialThemeProvider>;
};
