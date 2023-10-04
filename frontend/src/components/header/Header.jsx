import React from "react";
import { Menubar } from "primereact/menubar";

export function Header() {
  // TODO: add theme switcher
  // FIXME: remove border radius 
  // FIXME: adjust header
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Create", icon: "pi pi-fw pi-calendar" },
    { label: "Edit", icon: "pi pi-fw pi-pencil" },
    { label: "Documentation", icon: "pi pi-fw pi-file" },
    { label: "Quizzes", icon: "pi pi-fw pi-cog" },
  ];

  return (
    <div>
      <Menubar
        model={items}
        pt={{
          action: ({ props, state, context }) => ({
            className: context.active
              ? "bg-red border-round-sm"
              : undefined,
          }),
        }}
      />
    </div>
  );
}
