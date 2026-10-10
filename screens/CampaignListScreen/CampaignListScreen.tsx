import {
  USER_CAMPAIGN_LINKS,
  UserCampaignLinkExpanded,
} from "../../data/links/UserCampaignLinks";
import { CAMPAIGNS } from "../../data/Campaigns";
import NoCampaignsView from "./NoCampaignsView";
import CampaignsView from "./CampaignsView";

interface Props {
  userId: number;
}

const CampaignListScreen = ({ userId }: Props) => {
  const userCampaigns: Array<UserCampaignLinkExpanded> =
    USER_CAMPAIGN_LINKS.filter((user) => user.userId === userId).map((user) => {
      return {
        ...user,
        campaign: CAMPAIGNS.find((campaign) => campaign.id === user.campaignId),
      };
    });
  const joinedCampaign = userCampaigns.length > 0;

  return joinedCampaign ? (
    <CampaignsView campaigns={userCampaigns} />
  ) : (
    <NoCampaignsView />
  );
};

export default CampaignListScreen;
