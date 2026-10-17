import { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { COLORS, FONT_SIZES, SPACING } from "../theme";
import ScreenTitle from "../components/ScreenTitle";
import NotebookSheet from "../components/NotebookSheet";
import NotebookButton from "../components/NotebookButton";
import CharacterItem from "../components/CharacterItem";
import { getCampaign } from "../repositories/Campaign";
import { getCharacters } from "../repositories/Character";

type Props = NativeStackScreenProps<RootStackParamList, "CharacterList">;

const CharacterListScreen = ({ navigation, route }: Props) => {
  const { campaignId, userId } = route.params;
  const campaignName = getCampaign(campaignId)?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: campaignName,
    });
  }, [campaignName]);

  const [characters, setCharacters] = useState(
    getCharacters(campaignId, userId),
  );
  const characterItems = characters.map((character) => (
    <CharacterItem
      title={character.name}
      onPress={() =>
        navigation.navigate("CharacterStats", {
          characterId: character.id,
        })
      }
    />
  ));
  const nbItems = [
    <View style={styles.buttonsContainer}>
      <NotebookButton
        text="New Character"
        highlightColor={COLORS.highlighterBlue}
      />
    </View>,
    <ScreenTitle></ScreenTitle>,
    <ScreenTitle>My Characters</ScreenTitle>,
    <ScreenTitle></ScreenTitle>,

    ...characterItems,
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

export default CharacterListScreen;
