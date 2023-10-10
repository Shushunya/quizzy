import { Link } from "react-router-dom";

export function Footer() {
  // TODO: add font styles
  // FIXME: adjust footer

  return (
    <div className="flex bg-bluegray-800 align-items-start justify-content-between h-5rem gap-3 p-3">
      <div className="flex gap-2">
        <Link className="flex align-item-center text-4xl no-underline" to={"/"}>
          Quizzy
        </Link>
        <div className="flex align-items-end p-1 gap-1 font-light text-sm">
          <span>v0.1</span>
          <span>2023</span>
        </div>
      </div>
      <div>
        <i className="pi pi-fw pi-heart"></i>
        <span>developed by Shushunya</span>
      </div>
    </div>
  );
}
