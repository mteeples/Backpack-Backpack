import { FlatList, View, Text, StyleSheet } from "react-native";

import NotebookLineItem from "./NotebookLineItem";
import { ReactNode } from "react";

const MIN_LINES = 20;

interface Props {
  data?: Array<ReactNode>;
}

const NotebookSheet = ({ data }: Props) => {
  function fillData() {
    const dataLength = data ? data.length : 0;
    const fillerLength = dataLength < MIN_LINES ? MIN_LINES - dataLength : 0;

    const filler: Array<ReactNode> = Array.apply(null, Array(fillerLength)).map(
      () => <Text></Text>,
    );
    return data ? [...data, ...filler] : filler;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fillData()}
        renderItem={({ item }) => <NotebookLineItem>{item}</NotebookLineItem>}
        keyExtractor={() => Math.random().toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
});

export default NotebookSheet;
