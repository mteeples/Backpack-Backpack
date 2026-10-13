import { Alert } from "react-native";
import { Campaign } from "../models/Campaign";
import { CAMPAIGNS } from "../data/Campaigns";

export function getCampaigns(userId: string): Array<Campaign> {
  return CAMPAIGNS.filter((campaign) => campaign.userIsPlayer(userId));
}

export function joinCampaign(
  campaignId: string,
  userId: string,
  userCampaigns: Array<Campaign>,
): Array<Campaign> {
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

  const newCampaign = campaign[0];
  return [
    ...userCampaigns,
    new Campaign(
      newCampaign.id,
      newCampaign.name,
      newCampaign.description,
      newCampaign.hostId,
      [...newCampaign.playerIds, userId],
    ),
  ];
}

export function hostGame(
  name: string,
  description: string,
  userId: string,
  userCampaigns: Array<Campaign>,
): Array<Campaign> {
  return [
    ...userCampaigns,
    new Campaign(Math.random().toString(), name, description, userId, []),
  ];
}
