import { Scrub, ServerResp } from "../../models/scrub.model";
import { Repo } from "./repo.interface";

export class ScrubsRepo implements Repo<ServerResp> {
  constructor(
    public url: string = "https://w6ch5-ivan-backend.onrender.com/scrubs"
  ) {}

  async readAll(): Promise<ServerResp> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    const scrubs = await resp.json();
    return scrubs;
  }

  async readOne(id: number): Promise<ServerResp> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const scrub = await resp.json();

    return scrub;
  }

  async update(info: Partial<Scrub>): Promise<ServerResp> {
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
    const data = await resp.json();
    return data;
  }

  // Create no tiene que recibir el ID como parámetro, puesto que lo va a asignar el server.

  async create(info: Scrub): Promise<ServerResp> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const data = await resp.json();
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
