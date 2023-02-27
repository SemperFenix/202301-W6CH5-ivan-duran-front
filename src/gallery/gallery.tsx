import { useMemo } from "react";
import { Card } from "../card/card";
import { useScrubs } from "../hooks/use.scrubs";
import { Scrub } from "../models/scrub.model";
import { ScrubsRepo } from "../services/repository/scrubs.repo";
import "./gallery.css";

export function Gallery() {
  const repo = useMemo(() => new ScrubsRepo(), []);

  const { scrubs, addActualScrub } = useScrubs(repo);
  console.log(scrubs);
  return (
    <>
      <h1>Gallery</h1>
      <div className="characters">
        {scrubs.scrubs.map((item: Scrub) => (
          <Card
            info={item}
            addActual={addActualScrub}
            status={scrubs.actualScrub}
            key={item.id}
          ></Card>
        ))}
      </div>
    </>
  );
}
