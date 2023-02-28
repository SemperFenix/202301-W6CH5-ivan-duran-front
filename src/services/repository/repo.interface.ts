import { Scrub } from "../../models/scrub.model";

export interface Repo<T> {
  readAll(): Promise<T>;
  readOne(id: Scrub["_id"]): Promise<T>;
  create(info: Partial<Scrub>): Promise<T>;
  update(info: Partial<Scrub>): Promise<T>;
  delete(id: Scrub["_id"]): Promise<void>;
}
