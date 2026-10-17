import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

type Props = NativeStackScreenProps<RootStackParamList, "CampaignDetail">;

const CampaignDetailScreen = () => {
  return <Text>Campaign Detail</Text>;
};

export default CampaignDetailScreen;
