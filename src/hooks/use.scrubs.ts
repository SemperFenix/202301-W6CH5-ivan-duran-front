import { useDispatch, useSelector } from "react-redux";
import { ScrubsRepo } from "../services/repository/scrubs.repo";
import { AppDispatch, RootState } from "../store/store";
import * as ac from "../reducer/scrubs.actions.creator";
import { useEffect } from "react";
import { Scrub } from "../models/scrub.model";

export function useScrubs(repo: ScrubsRepo) {
  const scrubs = useSelector((state: RootState) => state.scrubs);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const readAllScrubs = async () => {
      try {
        const data = await repo.readAll();
        dispatch(ac.readAllCreator(data.results));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    readAllScrubs();
  }, [dispatch, repo]);

  const readScrub = async (id: string) => {
    try {
      const data = await repo.readOne(id);
      dispatch(ac.readOneCreator(data.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const createScrub = async (info: Partial<Scrub>) => {
    try {
      const data = await repo.create(info);
      dispatch(ac.createCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const updateScrub = async (info: Partial<Scrub>) => {
    try {
      const data = await repo.update(info);
      dispatch(ac.updateCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const deleteScrub = async (id: string) => {
    try {
      await repo.delete(id);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const addActualScrub = (info: Scrub) => {
    dispatch(ac.addActualCreator(info));
  };

  return {
    scrubs,
    readScrub,
    createScrub,
    updateScrub,
    deleteScrub,
    addActualScrub,
  };
}
