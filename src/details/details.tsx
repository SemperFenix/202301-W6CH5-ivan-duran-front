import { useMemo } from "react";
import { DetailsCard } from "../details.card/details.card";
import { useScrubs } from "../hooks/use.scrubs";
import { ScrubsRepo } from "../services/repository/scrubs.repo";

export function Details() {
  const repo = useMemo(() => new ScrubsRepo(), []);
  const { scrubs } = useScrubs(repo);

  return (
    <>
      <DetailsCard info={scrubs.actualScrub}></DetailsCard>
    </>
  );
}
