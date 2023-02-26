import { SyntheticEvent } from "react";
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

  return (
    // Commented code for future use
    // <Link to={"/details"}>
    <>
      <div onClick={handleClick}>
        <p>Name: {info.name}</p>
        <p>Occupation: {info.occupattion}</p>
        <p>Personality: {info.personality}</p>
      </div>

      <div>
        <p>Name: {status.name}</p>
        <p>Occupation: {status.occupattion}</p>
        <p>Personality: {status.personality}</p>
      </div>
    </>
    // </Link>
  );
}
