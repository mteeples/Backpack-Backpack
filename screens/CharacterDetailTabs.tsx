import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CharacterDetailParams, RootStackParamList } from "../routes";

import CharacterInventoryScreen from "./CharacterInventoryScreen";
import CharacterStatsScreen from "./CharacterStatsScreen";

const Tabs = createBottomTabNavigator<CharacterDetailParams>();
type Props = NativeStackScreenProps<RootStackParamList, "CharacterDetail">;

const CharacterDetailTabs = ({ route }: Props) => {
  const { characterId } = route.params;
  return (
    <Tabs.Navigator initialRouteName="Stats">
      <Tabs.Screen
        name="Stats"
        component={CharacterStatsScreen}
        initialParams={{ characterId }}
      />
      <Tabs.Screen
        name="Inventory"
        component={CharacterInventoryScreen}
        initialParams={{ characterId }}
      />
    </Tabs.Navigator>
  );
};

export default CharacterDetailTabs;
