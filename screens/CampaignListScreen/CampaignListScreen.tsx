import {
  USER_CAMPAIGN_LINKS,
  UserCampaignLinkExpanded,
} from "../../data/links/UserCampaignLinks";
import { CAMPAIGNS } from "../../data/Campaigns";
import NoCampaignsView from "./NoCampaignsView";
import CampaignsView from "./CampaignsView";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

interface Props {
  userId: string;
}

const STARTING_CAMPAIGNS: Array<UserCampaignLinkExpanded> =
  USER_CAMPAIGN_LINKS.map((user) => {
    return {
      ...user,
      campaign: CAMPAIGNS.find((campaign) => campaign.id === user.campaignId),
    };
  });

const CampaignListScreen = ({ userId }: Props) => {
  const [userCampaigns, setUserCampaigns] = useState(
    STARTING_CAMPAIGNS.filter((user) => user.userId === userId),
  );
  const joinedCampaign = userCampaigns.length > 0;
  console.log(userCampaigns);
  return (
    <ImageBackground
      source={require("../../assets/images/pexels-jorge-acre-239933086-17061995.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      {joinedCampaign ? (
        <CampaignsView
          campaigns={userCampaigns}
          setCampaigns={setUserCampaigns}
        />
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
