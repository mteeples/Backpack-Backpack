import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

type Props = NativeStackScreenProps<RootStackParamList, "CharacterStats">;

const CharacterStatsScreen = () => {
  return <Text>Character Stats</Text>;
};

export default CharacterStatsScreen;
