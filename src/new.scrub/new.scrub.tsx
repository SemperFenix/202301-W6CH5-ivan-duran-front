import { SyntheticEvent, useMemo, useRef } from "react";
import { useScrubs } from "../hooks/use.scrubs";
import { Scrub } from "../models/scrub.model";
import { ScrubsRepo } from "../services/repository/scrubs.repo";

export function NewScrub() {
  const repo = useMemo(() => new ScrubsRepo(), []);
  const formNewScrubRef = useRef<HTMLFormElement>(null);

  const { scrubs, createScrub } = useScrubs(repo);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formNewScrub = formNewScrubRef.current as HTMLFormElement;
    const newId = Math.max(...scrubs.scrubs.map((item) => item.id));

    const newScrub: Scrub = {
      id: newId + 1,
      name: (formNewScrub[0] as HTMLInputElement).value,
      img: (formNewScrub[1] as HTMLInputElement).value,
      occupattion: (formNewScrub[2] as HTMLInputElement).value,
      personality: (formNewScrub[3] as HTMLInputElement).value,
      extend_perso: (formNewScrub[4] as HTMLInputElement).value,
    };
    createScrub(newScrub);
    formNewScrub.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formNewScrubRef}>
        <input type="text" placeholder="Scrub name" />
        <input type="text" placeholder="Scrub image link" />
        <input type="text" placeholder="Scrub occupattion" />
        <input type="text" placeholder="Scrub personality (one word)" />
        <input type="text" placeholder="Scrub extended personality" />
        <button>Send!</button>
      </form>
    </>
  );
}
