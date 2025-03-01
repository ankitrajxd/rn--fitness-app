import { StyleSheet } from "react-native";
import React from "react";
import Card from "./general/Card";
import { Text, View } from "@/components/general/Themed";
import { WorkoutWithExercise } from "@/types/models";

interface Props {
  data?: WorkoutWithExercise;
}

const WorkoutListItem = ({ data }: Props) => {
  return (
    <Card title="15:08 Monday, 23 Sep">
      <View>
        <View style={styles.mainBody}>
          <View style={[styles.rowStyles]}>
            <Text style={{ fontWeight: "bold" }}>Exercise</Text>
            <Text style={{ fontWeight: "bold" }}>Best set</Text>
          </View>
          <View style={styles.rowStyles}>
            <Text>3 x Barbell Row</Text>
            <Text>7 x 75kg</Text>
          </View>
          <View style={styles.rowStyles}>
            <Text>3 x Barbell Row</Text>
            <Text>5 x 150kg</Text>
          </View>
          <View style={styles.rowStyles}>
            <Text>3 x Barbell Row</Text>
            <Text>3 x 150kg</Text>
          </View>
          <View style={styles.rowStyles}>
            <Text>3 x Pull-up</Text>
          </View>

          <View
            style={{ borderTopWidth: 1, marginTop: 7, borderColor: "#ccc" }}
          />

          <View style={{ width: "40%", flexDirection: "row", gap: 20 }}>
            <Text>0:01</Text>
            <Text>7035 kg</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default WorkoutListItem;

const styles = StyleSheet.create({
  rowStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainBody: {
    gap: 7,
  },
});
