import { Campaign } from "../models/Campaign";

export const CAMPAIGNS: Array<Campaign> = [
  new Campaign(
    "1",
    "OSE Spooky Woods",
    "First time campaign using the OSE rules, set in a spooky forest.",
    "0",
    ["1"],
  ),
  new Campaign(
    "2",
    "Cairn Coastal",
    "Coastal expedition in Cairn for a group of new players.",
    "0",
    ["2", "3", "4", "5"],
  ),
];
