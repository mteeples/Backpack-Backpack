import { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

import { CharacterDetailParams, RootStackParamList } from "../routes";
import { getCharacter } from "../repositories/Character";
import { COLORS } from "../theme";

import CharacterInventoryScreen from "./CharacterInventoryScreen";
import CharacterStatsScreen from "./CharacterStatsScreen";

const Tabs = createBottomTabNavigator<CharacterDetailParams>();
type Props = NativeStackScreenProps<RootStackParamList, "CharacterDetail">;

const CharacterDetailTabs = ({ route, navigation }: Props) => {
  const { characterId } = route.params;
  const character = getCharacter(characterId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: character?.name,
    });
  }, [character]);

  return (
    <Tabs.Navigator
      initialRouteName="Stats"
      screenOptions={{
        tabBarActiveTintColor: COLORS.highlighterBlue,
        tabBarStyle: {
          backgroundColor: COLORS.ballpointBlack,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Stats"
        component={CharacterStatsScreen}
        initialParams={{ characterId }}
        options={{
          tabBarLabel: "Stats",
          tabBarIcon: ({ focused }) => (
            <MaterialDesignIcons
              name="human"
              color={focused ? COLORS.highlighterBlue : "gray"}
              size={focused ? 28 : 24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Inventory"
        component={CharacterInventoryScreen}
        initialParams={{ characterId }}
        options={{
          tabBarLabel: "Inventory",
          tabBarIcon: ({ focused }) => (
            <MaterialDesignIcons
              name="bag-personal"
              color={focused ? COLORS.highlighterBlue : "gray"}
              size={focused ? 28 : 24}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default CharacterDetailTabs;
