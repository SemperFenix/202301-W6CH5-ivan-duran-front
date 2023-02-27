import { Scrub } from "../../models/scrub.model";

export interface Repo<T> {
  readAll(): Promise<T>;
  readOne(id: Scrub["id"]): Promise<T>;
  create(info: Partial<Scrub>): Promise<T>;
  update(info: Partial<Scrub>): Promise<T>;
  delete(id: Scrub["id"]): Promise<void>;
}
