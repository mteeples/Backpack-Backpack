export class Adventure {
  id;
  campaignId;
  name;
  description;

  constructor(
    id: string,
    campaignId: string,
    name: string,
    description: string,
  ) {
    this.id = id;
    this.campaignId = campaignId;
    this.name = name;
    this.description = description;
  }
}
