import { Scrub } from "../models/scrub.model";

type DetailsCardProps = {
  info: Scrub;
};

export function DetailsCard({ info }: DetailsCardProps) {
  return (
    <>
      <div>
        <img src={info.img} width="450" alt={info.name} />
        <p>Name: {info.name}</p>
        <p>Occupation: {info.occupattion}</p>
        <p>Personality: {info.extendPerso}</p>
      </div>
    </>
  );
}
