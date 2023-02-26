import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Scrub } from "../models/scrub.model";

interface CardData {
  info: Scrub;
  addActual: (info: Scrub) => void;
  status: Scrub;
}

export function Card({ info, addActual, status }: CardData) {
  const handleClick = (ev: SyntheticEvent) => {
    addActual({ ...info });
  };

  console.log(info.img);

  return (
    // Commented code for future use
    <>
      <Link to={"/details"}>
        <div onClick={handleClick}>
          <img src={info.img} width="250" alt={info.name} />
          <p>Name: {info.name}</p>
          <p>Occupation: {info.occupattion}</p>
          <p>Personality: {info.personality}</p>
        </div>
      </Link>
    </>
  );
}
