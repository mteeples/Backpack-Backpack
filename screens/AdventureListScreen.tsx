import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import ScreenTitle from "../components/ScreenTitle";
import NotebookSheet from "../components/NotebookSheet";
import NotebookButton from "../components/NotebookButton";
import AdventureItem from "../components/AdventureItem";
import { getAdventures } from "../repositories/Adventure";
import { getCampaign } from "../repositories/Campaign";

type Props = NativeStackScreenProps<RootStackParamList, "AdventureList">;

const AdventureListScreen = ({ navigation, route }: Props) => {
  const { campaignId } = route.params;
  const campaignName = getCampaign(campaignId)?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: campaignName,
    });
  }, [campaignName]);

  const [adventures, setAdventures] = useState(getAdventures(campaignId));
  const adventureItems = adventures.map((adventure) => (
    <AdventureItem
      title={adventure.name}
      onPress={() =>
        navigation.navigate("AdventureDetail", {
          adventureId: adventure.id,
        })
      }
    />
  ));
  const nbItems = [
    <View style={styles.buttonsContainer}>
      <NotebookButton
        text="New Adventure"
        highlightColor={COLORS.highlighterPink}
      />
    </View>,
    <ScreenTitle></ScreenTitle>,
    <ScreenTitle>My Adventures</ScreenTitle>,
    <ScreenTitle></ScreenTitle>,

    ...adventureItems,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.notesContainer}>
        <NotebookSheet data={nbItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.notebookWhite,
  },
  notesContainer: {
    flex: 1,
  },
  noteIcon: {
    padding: SPACING.sm,
  },
  note: {
    flexDirection: "row",
    alignItems: "center",
  },
  noteText: {
    fontSize: FONT_SIZES.body,
    backgroundColor: COLORS.stickyBeige,
  },
  button: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
});

export default AdventureListScreen;
