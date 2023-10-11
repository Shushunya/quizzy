import { Link } from "react-router-dom";
import css from "./Header.module.css";

export function Header() {
  // TODO: add theme switcher
  // TODO: add font styles
  // FIXME: adjust header
  const isAuth = false;
  const username = "Shushunya";

  return (
    <header className="flex align-items-center justify-content-between h-3rem p-3 bg-bluegray-800">
      <Link className="flex text-xl no-underline text-gray-200 hover:text-primary" to={'/'}>Quizzy</Link>
      <div >
        <Link to={isAuth ? "/users/me" : "/login"} className="flex flex-row-reverse align-items-center gap-1 no-underline text-gray-200 hover:text-primary">
          <i className="pi pi-fw pi-user"></i>
          <span>{isAuth ? username : "Login"}</span>
        </Link>
      </div>
    </header>
  );
}
