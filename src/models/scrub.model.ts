export type Scrub = {
  id: number;
  img: string;
  name: string;
  occupattion: string;
  personality: string;
  extendPerso: string;
};

export type ServerResp = {
  results: Scrub[];
};
