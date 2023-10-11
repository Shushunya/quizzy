import { Link } from "react-router-dom";

export function Footer() {
  // TODO: add font styles
  // FIXME: adjust footer
  // TODO: add version

  return (
    <footer className="flex bg-bluegray-800 align-items-start h-5rem gap-3 p-3">
      <div className="flex gap-2">
        <Link className="flex align-item-center text-4xl no-underline" to={"/"}>
          Quizzy
        </Link>
        <div className="flex align-items-end p-1 gap-1 font-light text-sm">
          <span>2023</span>
          <i className="pi pi-fw pi-heart"></i>
          <Link to={"https://github.com/Shushunya/quizzy"}>
            developed by Shushunya
          </Link>
        </div>
      </div>
    </footer>
  );
}
