export class Character {
  id;
  campaignId;
  userId;
  name;
  strength;
  dexterity;
  willpower;
  hp;
  background;

  constructor(
    id: string,
    campaignId: string,
    userId: string,
    name: string,
    strength: number,
    dexterity: number,
    willpower: number,
    hp: number,
    background: string,
  ) {
    this.id = id;
    this.campaignId = campaignId;
    this.userId = userId;
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.willpower = willpower;
    this.hp = hp;
    this.background = background;
  }
}
