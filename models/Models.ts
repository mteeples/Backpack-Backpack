export interface Item {
  id: string;
  name: string;
  weight: number;
}

export interface Character {
  id: string;
  userId: string;
  campaignId: string;
  name: string;
  strength: number;
  dexterity: number;
  willpower: number;
  isActive: boolean;
  items?: Array<Item>;
}

export interface Monster {
  id: string;
  name: string;
}

export interface AreaExit {
  areaId: string;
  description: string;
}

export interface AdventureArea {
  id: string;
  adventureId: string;
  name: string;
  description: string;
  monsters?: Array<Monster>;
  items?: Array<Item>;
  exits: Array<AreaExit>;
}

export interface Adventure {
  id: string;
  name: string;
  description: string;
  areas?: Array<AdventureArea>;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  userIsHost: boolean;
  characters?: Array<Character>;
  adventures: Array<Adventure>;
}

export interface User {
  id: string;
  username: string;
  campaigns?: Array<Campaign>;
}
