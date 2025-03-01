import { ScrollView, useColorScheme } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import colors from "@/constants/colors";
import { View, Text } from "@/components/general/Themed";
import CustomButton from "@/components/general/CustomButton";
import WorkoutListItem from "@/components/WorkoutListItem";

const HomeScreen = () => {
  const colorScheme = useColorScheme() || "light";

  const Colors = colors[colorScheme];

  return (
    <View style={{ flex: 1 }}>
      {/* <Link style={{ color: Colors.text }} href={"/workout/current"}>
        Resume current Workout
      </Link>
      <Link style={{ color: Colors.text }} href={"/workout/123"}>
        Open workout with id 123
      </Link>

      <Text>Home Screen</Text> */}

      <CustomButton title="Start New Workout" />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10, paddingBottom: 40 }}
      >
        <View style={{ gap: 10 }}>
          <WorkoutListItem />
          <WorkoutListItem />
          <WorkoutListItem />
          <WorkoutListItem />
          <WorkoutListItem />
          <WorkoutListItem />
        </View>
      </ScrollView>
      <StatusBar />
    </View>
  );
};

export default HomeScreen;
