import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="workout/current" options={{ title: "Workout" }} />
        <Stack.Screen name="workout/[id]" options={{ title: "Workout" }} />
      </Stack>
      <StatusBar />
    </>
  );
}
