import { Outlet } from "react-router-dom";

import "primereact/resources/themes/soho-dark/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";

import { Footer } from "../components/shared/footer/Footer";
import { Header } from "../components/shared/header/Header";

export function Root() {
  return (
    <div className="flex flex-column align-items-stretch min-h-screen">
      <Header />
      <div className="flex flex-grow-1 align-items-stretch justify-content-around surface-ground">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
