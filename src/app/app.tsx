import React from "react";
import { Menu } from "../menu/menu";
import { AppRouter } from "../router/app.router";

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Gallery", path: "/gallery" },
  { label: "New sCRUB", path: "/new-item" },
  { label: "Favorites", path: "/favorites" },
];

function App() {
  return (
    <>
      <Menu options={menuOptions}></Menu>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </>
  );
}

export default App;
