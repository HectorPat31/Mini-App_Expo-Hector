import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FrasesProvider } from "../context/FrasesContext";

export default function RootLayout() {
  return (
    <FrasesProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#FFF7FB" },
          headerTintColor: "#62475C",
          headerTitleStyle: { fontWeight: "800" },
          contentStyle: { backgroundColor: "#FFF7FB" }
        }}
      >
        <Stack.Screen name="index" options={{ title: "Frase del Día" }} />
        <Stack.Screen name="favoritas" options={{ title: "Mis favoritas" }} />
      </Stack>
    </FrasesProvider>
  );
}
