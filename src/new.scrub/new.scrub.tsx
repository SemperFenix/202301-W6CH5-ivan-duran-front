import { SyntheticEvent, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useScrubs } from "../hooks/use.scrubs";
import { Scrub } from "../models/scrub.model";
import { ScrubsRepo } from "../services/repository/scrubs.repo";

import "./new.scrub.css";

export function NewScrub() {
  const repo = useMemo(() => new ScrubsRepo(), []);
  const navigate = useNavigate();
  const { id } = useParams();

  const { scrubs, createScrub, updateScrub } = useScrubs(repo);
  console.log(scrubs.actualScrub);

  const handleCreate = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formNewScrub = document.querySelector("form") as HTMLFormElement;
    const newScrub: Partial<Scrub> = {
      name: (formNewScrub[0] as HTMLInputElement).value,
      img: (formNewScrub[1] as HTMLInputElement).value,
      occupattion: (formNewScrub[2] as HTMLInputElement).value,
      personality: (formNewScrub[3] as HTMLInputElement).value,
      extendPerso: (formNewScrub[4] as HTMLInputElement).value,
    };
    createScrub(newScrub);
    formNewScrub.reset();
    navigate("/gallery");
  };

  const handleUpdate = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formNewScrub = document.querySelector("form") as HTMLFormElement;
    const name = (formNewScrub[0] as HTMLInputElement).value;
    const img = (formNewScrub[1] as HTMLInputElement).value;
    const occupattion = (formNewScrub[2] as HTMLInputElement).value;
    const personality = (formNewScrub[3] as HTMLInputElement).value;
    const extendPerso = (formNewScrub[4] as HTMLInputElement).value;

    const updatedScrub: Partial<Scrub> = {
      name: name === "" ? scrubs.actualScrub.name : name,
      img: img === "" ? scrubs.actualScrub.img : img,
      occupattion:
        occupattion === "" ? scrubs.actualScrub.occupattion : occupattion,
      personality:
        personality === "" ? scrubs.actualScrub.personality : personality,
      extendPerso:
        extendPerso === "" ? scrubs.actualScrub.extendPerso : extendPerso,
    };
    updateScrub({ ...scrubs.actualScrub, ...updatedScrub });
    formNewScrub.reset();
    navigate("/gallery");
  };
  const handler = id === "add" ? handleCreate : handleUpdate;

  return (
    <>
      <form className="add-scrub" data-testid="form" onSubmit={handler}>
        <input
          className="add-scrub_input"
          type="text"
          placeholder="Scrub name"
        />
        <input
          className="add-scrub_input"
          type="text"
          placeholder="Scrub image link"
        />
        <input
          className="add-scrub_input"
          type="text"
          placeholder="Scrub occupattion"
        />
        <input
          className="add-scrub_input"
          type="text"
          placeholder="Scrub personality (one word)"
        />
        <input
          className="add-scrub_input"
          type="text"
          placeholder="Scrub extended personality"
        />
        <button>Send!</button>
      </form>
    </>
  );
}
