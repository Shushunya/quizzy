import { Link } from "react-router-dom";
import css from "./Header.module.css";

export function Header() {
  // TODO: add theme switcher
  // TODO: add font styles
  // FIXME: adjust header
  const isAuth = false;
  const username = "Shushunya";

  return (
    <div className={css.container}>
      <Link className={css.logo} to={'/'}>Quizzy</Link>
      <div >
        <Link to={isAuth ? "/users/me" : "/login"} className={css.login}>
          <i className="pi pi-fw pi-user"></i>
          <span>{isAuth ? username : "Login"}</span>
        </Link>
      </div>
    </div>
  );
}
