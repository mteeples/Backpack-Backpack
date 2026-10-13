export class Campaign {
  id;
  hostId;
  name;
  description;
  playerIds;

  constructor(
    id: string,
    name: string,
    description: string,
    hostId: string,
    playerIds: Array<string>,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.hostId = hostId;
    this.playerIds = playerIds;
  }

  userIsPlayer(userId: string): boolean {
    return this.playerIds.includes(userId);
  }

  userIsHost(userId: string): boolean {
    return this.hostId === userId;
  }
}
