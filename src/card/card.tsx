import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Scrub } from "../models/scrub.model";

interface CardData {
  info: Scrub;
  addActual: (info: Scrub) => void;
  deleteScrub: (info: Scrub["id"]) => void;
  status: Scrub;
}

export function Card({ info, addActual, deleteScrub, status }: CardData) {
  const handleClick = (ev: SyntheticEvent) => {
    addActual({ ...info });
  };

  const handleDelete = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    console.log(info.id);
    deleteScrub(info.id);
  };

  return (
    // Commented code for future use
    <>
      <Link to={"/details"}>
        <div className="characters__item" onClick={handleClick}>
          <img src={info.img} width="250" alt={info.name} />
          <p>Name: {info.name}</p>
          <p>Occupation: {info.occupattion}</p>
          <p>Personality: {info.personality}</p>
          <Link to={"/gallery"}>
            <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
          </Link>
        </div>
      </Link>
    </>
  );
}
