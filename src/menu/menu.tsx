import { Link } from "react-router-dom";
import { MenuOption } from "../app/app";

export type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <div>
      <nav className="menu-container">
        <ul className="menu">
          {options.map((item: MenuOption) => (
            <li key={item.label} className="menu__option">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
