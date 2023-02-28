import { SyntheticEvent, useMemo } from "react";
import { useScrubs } from "../hooks/use.scrubs";
import { Scrub } from "../models/scrub.model";
import { ScrubsRepo } from "../services/repository/scrubs.repo";

import "./new.scrub.css";

export function NewScrub() {
  const repo = useMemo(() => new ScrubsRepo(), []);

  const { createScrub } = useScrubs(repo);

  const handleSubmit = (ev: SyntheticEvent) => {
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
  };

  return (
    <>
      <form className="add-scrub" data-testid="form" onSubmit={handleSubmit}>
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
