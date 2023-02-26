import { Navigate, Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/app";
import { Details } from "../details/details";
import { Gallery } from "../gallery/gallery";
import { Home } from "../home/home";
import { NewScrub } from "../new.scrub/new.scrub";

type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Routes>
      <Route path={"/"} element={<Home></Home>}></Route>
      <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
      <Route path={menuOptions[1].path} element={<Gallery></Gallery>}></Route>
      <Route path={menuOptions[2].path} element={<NewScrub></NewScrub>}></Route>
      <Route path={"/details"} element={<Details></Details>}></Route>

      {/* Código comentado para su futuro uso */}
      {/* <Route
        path={menuOptions[3].path}
        element={<Favorites></Favorites>}
      ></Route>


       */}

      <Route
        path={"*"}
        element={<Navigate to={"/home"} replace={true} />}
      ></Route>
    </Routes>
  );
}
