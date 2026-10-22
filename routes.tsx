export type RootStackParamList = {
  AdventureDetail: { adventureId: string };
  AdventureList: { userId: string; campaignId: string };
  CampaignList: { userId: string };
  CharacterList: { userId: string; campaignId: string };
  CharacterDetail: { characterId: string };
  SignIn: undefined;
  SignUp: undefined;
};

export type CharacterDetailParams = {
  Stats: { characterId: string };
  Inventory: { characterId: string };
};
