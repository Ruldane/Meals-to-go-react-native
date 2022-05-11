/* eslint-disable react/react-in-jsx-scope */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screens";

const isAdndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
