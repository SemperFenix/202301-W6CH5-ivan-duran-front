export type Scrub = {
  _id: string;
  img: string;
  name: string;
  occupattion: string;
  personality: string;
  extendPerso: string;
};

export type ServerResp = {
  results: Scrub[];
};
