export interface DbArea {
  id: string;
  adventureId: string;
  name: string;
  description: string;
}

export const AREAS: Array<DbArea> = [
  {
    id: "1",
    adventureId: "0",
    name: "Entryway",
    description: "An entryway",
  },
  {
    id: "2",
    adventureId: "0",
    name: "Great Hall",
    description: "Lots of rotten food and some rats",
  },
  {
    id: "3",
    adventureId: "0",
    name: "Vault",
    description: "Lots of gold!",
  },
];
