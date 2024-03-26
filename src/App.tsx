import { useState } from "react";
import { AppThemeProvider } from "./theme";

import { Route, Routes } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { RoutesProps, routes } from "./routes";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  const getRoutes = (allRoutes: any[]) =>
    allRoutes.map((route: RoutesProps) => {
      // if (route.collapse) {
      //   return getRoutes(route.collapse);
      // }

      if (route.path) {
        return (
          <Route path={route.path} element={route.component} key={route.key} />
        );
      }

      return null;
    });

  return (
    <AppThemeProvider>
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>{getRoutes(routes)}</Routes>
      </main>
    </AppThemeProvider>
  );
}

export default App;
