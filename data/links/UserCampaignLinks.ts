export interface DbUserCampaignLink {
  id: string;
  userId: string;
  campaignId: string;
  isHost: boolean;
}

export const USER_CAMPAIGN_LINKS: Array<DbUserCampaignLink> = [
  {
    id: "0",
    userId: "0",
    campaignId: "0",
    isHost: true,
  },
  {
    id: "1",
    userId: "2",
    campaignId: "0",
    isHost: false,
  },
  {
    id: "2",
    userId: "1",
    campaignId: "2",
    isHost: false,
  },
  {
    id: "3",
    userId: "1",
    campaignId: "1",
    isHost: true,
  },
];
