import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

type Props = NativeStackScreenProps<RootStackParamList, "CharacterInventory">;

const CharacterInventoryScreen = () => {
  return <Text>Character Inventory</Text>;
};

export default CharacterInventoryScreen;
