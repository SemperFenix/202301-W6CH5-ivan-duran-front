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
    const updatedScrub: Partial<Scrub> = {
      name: (formNewScrub[0] as HTMLInputElement).value,
      img: (formNewScrub[1] as HTMLInputElement).value,
      occupattion: (formNewScrub[2] as HTMLInputElement).value,
      personality: (formNewScrub[3] as HTMLInputElement).value,
      extendPerso: (formNewScrub[4] as HTMLInputElement).value,
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
