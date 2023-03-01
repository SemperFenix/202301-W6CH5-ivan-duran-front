import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Scrub } from "../models/scrub.model";

import "./card.css";

interface CardData {
  info: Scrub;
  addActual: (info: Scrub) => void;
  deleteScrub: (info: Scrub["_id"]) => void;
  status: Scrub;
}

export function Card({ info, addActual, deleteScrub, status }: CardData) {
  const handleClick = (ev: SyntheticEvent) => {
    addActual({ ...info });
  };

  const handleDelete = (ev: SyntheticEvent) => {
    deleteScrub(info._id);
  };

  return (
    // Commented code for future use

    <div className="card" key={info._id}>
      <Link to={"/details"}>
        <div className="characters__item" onClick={handleClick}>
          <img src={info.img} width="250" alt={info.name} />
          <p>Name: {info.name}</p>
          <p>Occupation: {info.occupattion}</p>
          <p>Personality: {info.personality}</p>
        </div>
      </Link>
      <div className="card__actions">
        <Link to={"/gallery"}>
          <i
            data-testid="delete-button"
            className="fa-solid fa-trash-can"
            onClick={handleDelete}
          ></i>
        </Link>
        <Link to={"/new-item/edit"}>
          <i
            data-testid="edit-button"
            className="fa-solid fa-pen-to-square"
            onClick={handleClick}
          ></i>
        </Link>
      </div>
    </div>
  );
}
