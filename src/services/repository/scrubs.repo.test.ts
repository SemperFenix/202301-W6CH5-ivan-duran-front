import { Scrub } from "../../models/scrub.model";
import { ScrubsRepo } from "./scrubs.repo";

const repo = new ScrubsRepo();

describe("Given the scrubs repo", () => {
  // OK tests

  describe("When create a new instance of the class and call method readAll", () => {
    test("Then it should create the item and return the values fetched", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([{ test: "test" }] as unknown as Scrub[]),
      });

      expect(repo).toBeInstanceOf(ScrubsRepo);
      const readAll = await repo.readAll();
      expect(readAll).toEqual([{ test: "test" }]);
    });
  });

  describe("When it calls the method readOne", () => {
    test("Then it should return the value of the one asked", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue({ id: 2, test: "test2" } as unknown as Scrub),
      });

      const readOne = await repo.readOne(2);
      expect(readOne).toEqual({ id: 2, test: "test2" });
    });
  });

  describe("When it calls the method update", () => {
    test("Then it should return the updated value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue({ id: 2, test: "test3" } as unknown as Scrub),
      });

      const update = await repo.update({
        test: "test3",
      } as unknown as Partial<Scrub>);
      expect(update).toEqual({ id: 2, test: "test3" });
    });
  });

  describe("When it calls the method create", () => {
    test("Then it should return the value created", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue({ id: 3, test: "test4" } as unknown as Scrub),
      });

      const create = await repo.create({
        test: "test4",
      } as unknown as Partial<Scrub>);
      expect(create).toEqual({ id: 3, test: "test4" });
    });
  });

  describe("When it calls the method delete", () => {
    test("Then it should call fetch with no return", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn(),
      });

      const delet = await repo.delete(2);
      expect(fetch).toHaveBeenCalled();
      expect(delet).toBe(undefined);
    });
  });

  // Error tests

  describe("When readAll method fails to fetch", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const readAll = repo.readAll();
      await expect(readAll).rejects.toThrow();
    });
  });

  describe("When readOne method fails to fetch", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const readOne = repo.readOne(1);
      await expect(readOne).rejects.toThrow();
    });
  });

  describe("When update method fails to fetch", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const update = repo.update({ test: "test" } as unknown as Partial<Scrub>);
      await expect(update).rejects.toThrow();
    });
  });

  describe("When create method fails to fetch", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const create = repo.create({
        test: "test",
      } as unknown as Partial<Scrub>);
      await expect(create).rejects.toThrow();
    });
  });

  describe("When delete method fails to fetch", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error");
      const delet = repo.delete(1);
      await expect(delet).rejects.toThrow();
    });
  });
});
