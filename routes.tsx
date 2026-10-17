export type RootStackParamList = {
  AdventureDetail: { adventureId: string };
  CampaignDetail: { userId: string; campaignId: string };
  CampaignList: { userId: string };
  CharacterInventory: { characterId: string };
  CharacterStats: { characterId: string };
  SignIn: undefined;
  SignUp: undefined;
};
