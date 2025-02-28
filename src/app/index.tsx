import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View>
      <Link href={"/workout/current"}>Resume current Workout</Link>
      <Link href={"/workout/123"}>Open workout with id 123</Link>

      <Text>Home Screen</Text>
      <StatusBar />
    </View>
  );
};

export default HomeScreen;
