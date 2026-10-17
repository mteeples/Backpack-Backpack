import { ADVENTURES } from "../data/dummy-data";
import { Adventure } from "../models/Adventure";

export function getAdventures(campaignId: string): Array<Adventure> {
  return ADVENTURES.filter((adventure) => adventure.campaignId === campaignId);
}

export function getAdventure(adventureId: string): Adventure | undefined {
  return ADVENTURES.find((adventure) => adventure.id === adventureId);
}
