export interface Character {
  id: number;
  userId: number;
  campaignId: number;
  name: string;
  strength: number;
  dexterity: number;
  willpower: number;
  isActive: boolean;
}

export const CHARACTERS: Array<Character> = [
  {
    id: 1,
    name: "Jeff",
    strength: 10,
    dexterity: 10,
    willpower: 10,
    userId: 1,
    campaignId: 0,
    isActive: true,
  },
  {
    id: 2,
    name: "Jeff the First",
    strength: 10,
    dexterity: 10,
    willpower: 10,
    userId: 1,
    campaignId: 0,
    isActive: false,
  },
  {
    id: 3,
    name: "Jeff III",
    strength: 10,
    dexterity: 10,
    willpower: 10,
    userId: 2,
    campaignId: 0,
    isActive: true,
  },
];
