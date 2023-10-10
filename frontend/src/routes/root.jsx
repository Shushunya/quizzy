import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/Header";

import "primereact/resources/themes/soho-dark/theme.css";
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';
        

export default function Root() {
    return (
      <>
        <Header />
        <Outlet />
        <div>FOOTER</div>
      </>
    );
  }