import { Outlet } from "react-router-dom";

import "primereact/resources/themes/soho-dark/theme.css";
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';

import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

export default function Root() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }