export interface Campaign {
  id: string;
  name: string;
  description: string;
}

export const CAMPAIGNS: Array<Campaign> = [
  {
    id: "1",
    name: "Campaign 1",
    description: "The first campaign",
  },
  {
    id: "2",
    name: "Campaign 2",
    description: "The second campaign",
  },
  {
    id: "3",
    name: "Campaign 3",
    description: "The third campaign",
  },
];
