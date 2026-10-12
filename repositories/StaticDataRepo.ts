import { USER_CAMPAIGN_LINKS } from "../data/links/UserCampaignLinks";
import { CAMPAIGNS } from "../data/Campaigns";
import { CampaignOverview } from "../models/Models";
import { USERS } from "../data/Users";
import { Alert } from "react-native";

export function getCampaignOverviews(userId: string): Array<CampaignOverview> {
  const campaignLinks = USER_CAMPAIGN_LINKS.filter(
    (link) => link.userId === userId,
  );
  const expandedLinks = campaignLinks.map((link) => {
    return {
      ...link,
      campagin: CAMPAIGNS.find((campaign) => campaign.id === link.campaignId),
    };
  });
  return expandedLinks.map((link) => {
    return {
      id: link.campaignId,
      userIsHost: link.isHost,
      name: link.campagin?.name,
      description: link.campagin?.description,
    };
  });
}

interface JoinCampaignArgs {
  campaignId: string;
  userCampaigns: Array<CampaignOverview>;
}

export function joinCampaign({
  campaignId,
  userCampaigns,
}: JoinCampaignArgs): Array<CampaignOverview> {
  const campaign = CAMPAIGNS.filter((campaign) => campaign.id === campaignId);
  const alreadyJoined = userCampaigns.filter(
    (campaign) => campaign.id === campaignId,
  );

  if (campaign.length < 1) {
    Alert.alert(
      "No Campaign Found",
      `Could not find a campaign with join code ${campaignId}`,
    );
    return userCampaigns;
  }
  if (alreadyJoined.length >= 1) {
    Alert.alert(
      "Already joined",
      `You have already joined Campaign ${campaignId}`,
    );
    return userCampaigns;
  }

  return [
    ...userCampaigns,
    {
      id: campaign[0].id,
      name: campaign[0].name,
      description: campaign[0].description,
      userIsHost: false,
    },
  ];
}
