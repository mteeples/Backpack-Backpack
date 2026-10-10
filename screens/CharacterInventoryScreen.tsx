import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenTitle from "../components/ScreenTitle";
import Card from "../components/Card";

const CharacterInventoryScreen = () => {
  return (
    <SafeAreaView>
      <ScreenTitle>Equipped</ScreenTitle>
      {/* <FlatList 
      data={}
        keyExtractor={}
        renderItem={}
      /> */}
      <ScreenTitle>Stowed</ScreenTitle>
      {/* <FlatList /> */}
    </SafeAreaView>
  );
};

export default CharacterInventoryScreen;
