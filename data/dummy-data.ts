import { Campaign } from "../models/Campaign";
import { Adventure } from "../models/Adventure";
import { Character } from "../models/Character";

export const CAMPAIGNS: Array<Campaign> = [
  new Campaign(
    "1",
    "OSE Spooky Woods",
    "First time campaign using the OSE rules, set in a spooky forest.",
    "1",
    ["1"],
  ),
  new Campaign(
    "2",
    "Cairn Coastal",
    "Coastal expedition in Cairn for a group of new players.",
    "0",
    ["1", "2", "3", "4", "5"],
  ),
];

export const ADVENTURES: Array<Adventure> = [
  new Adventure("1", "1", "Black Wyrm of Brandonsford", "by Chance Dudinack"),
  new Adventure("2", "1", "Winter's Daughter", "by Gavin Norman"),
  new Adventure(
    "3",
    "2",
    "The Sinister Secret of Peacock Point",
    "by Brad Kerr",
  ),
];

export const CHARACTERS: Array<Character> = [
  new Character("1", "2", "1", "Karl", 10, 10, 10, 2, "Fighter"),
  new Character("2", "2", "1", "Larry", 10, 10, 10, 2, "Magic-User"),
  new Character("3", "2", "1", "Mel", 10, 10, 10, 2, "Thief"),
];
