import {
  USER_CAMPAIGN_LINKS,
  UserCampaignLinkExpanded,
} from "../../data/links/UserCampaignLinks";
import { CAMPAIGNS } from "../../data/Campaigns";
import NoCampaignsView from "./NoCampaignsView";
import CampaignsView from "./CampaignsView";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

interface Props {
  userId: string;
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

  return (
    <ImageBackground
      source={require("../../assets/images/pexels-jorge-acre-239933086-17061995.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      {joinedCampaign ? (
        <CampaignsView campaigns={userCampaigns} />
      ) : (
        <NoCampaignsView />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default CampaignListScreen;
