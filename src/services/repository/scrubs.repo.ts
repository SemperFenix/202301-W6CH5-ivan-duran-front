import { Scrub } from "../../models/scrub.model";

export interface ScrubsRepoStructure {
  readAll(): Promise<Scrub[]>;
  readOne(id: Scrub["id"]): Promise<Scrub>;
  create(info: Scrub): Promise<Scrub>;
  update(info: Partial<Scrub>): Promise<Scrub>;
  delete(id: Scrub["id"]): Promise<void>;
}

export class ScrubsRepo implements ScrubsRepoStructure {
  constructor(public url: string = "http://localhost:4500/scrubs") {}

  async readAll(): Promise<Scrub[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    const scrubs = (await resp.json()) as Scrub[];
    return scrubs;
  }

  async readOne(id: number): Promise<Scrub> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const scrub = (await resp.json()) as Scrub;
    return scrub;
  }

  async update(info: Partial<Scrub>): Promise<Scrub> {
    const url = this.url + "/" + info.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as Scrub;
    return data;
  }

  async create(info: Scrub): Promise<Scrub> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const data = (await resp.json()) as Scrub;
    return data;
  }

  async delete(id: number): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
  }
}
