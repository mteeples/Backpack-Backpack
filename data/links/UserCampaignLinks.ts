import { Campaign } from "../Campaigns";
import { User } from "../Users";

export interface UserCampaignLink {
  id: string;
  userId: string;
  campaignId: string;
  isHost: boolean;
}

export interface UserCampaignLinkExpanded extends UserCampaignLink {
  campaign?: Campaign;
  user?: User;
}

export const USER_CAMPAIGN_LINKS: Array<UserCampaignLink> = [
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
