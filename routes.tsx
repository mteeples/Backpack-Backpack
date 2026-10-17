export type RootStackParamList = {
  AdventureDetail: { adventureId: string };
  AdventureList: { userId: string; campaignId: string };
  CampaignList: { userId: string };
  CharacterList: { userId: string; campaignId: string };
  CharacterInventory: { characterId: string };
  CharacterStats: { characterId: string };
  SignIn: undefined;
  SignUp: undefined;
};
