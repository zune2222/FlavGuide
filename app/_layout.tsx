import { useFonts } from "expo-font";

export function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    fontM: require("../assets/fonts/fontM.ttf"),
    fontB: require("../assets/fonts/fontB.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return null;
}
