import { USER_CAMPAIGN_LINKS } from "../data/links/UserCampaignLinks";
import { CAMPAIGNS } from "../data/Campaigns";
import { CampaignOverview } from "../models/Models";

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
