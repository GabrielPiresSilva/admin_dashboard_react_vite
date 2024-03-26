import { Route, Routes } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "scenes/global/sidebar/Sidebar";
import { RoutesProps, routes } from "./routes";
import { AppProvider } from "contexts";

function App() {
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
    <AppProvider>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>{getRoutes(routes)}</Routes>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
