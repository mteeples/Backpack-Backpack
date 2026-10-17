import { CHARACTERS } from "../data/dummy-data";
import { Character } from "../models/Character";

export function getCharacters(
  campaignId: string,
  userId: string,
): Array<Character> {
  return CHARACTERS.filter(
    (character) =>
      character.campaignId === campaignId && character.userId === userId,
  );
}
