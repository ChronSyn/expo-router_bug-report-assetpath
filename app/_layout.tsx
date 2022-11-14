import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { Children } from "expo-router";
import { useTheme } from "@Themes/useTheme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { colours, theme } = useTheme();

  const [fontsLoaded] = useFonts({
    SpartanBlack: require("../assets/fonts/Spartan-Black.ttf"),
    SpartanBold: require("../assets/fonts/Spartan-Bold.ttf"),
    SpartanExtraBold: require("../assets/fonts/Spartan-ExtraBold.ttf"),
    SpartanExtraLight: require("../assets/fonts/Spartan-ExtraLight.ttf"),
    SpartanLight: require("../assets/fonts/Spartan-Light.ttf"),
    SpartanMedium: require("../assets/fonts/Spartan-Medium.ttf"),
    SpartanRegular: require("../assets/fonts/Spartan-Regular.ttf"),
    SpartanSemiBold: require("../assets/fonts/Spartan-SemiBold.ttf"),
    SpartanThin: require("../assets/fonts/Spartan-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider
        style={[
          Platform.OS === "android" && theme.padding.top.xxsmall,
          // __DEV__ && isTablet() && theme.padding.top.xxxlarge,
        ]}
      >
        <SafeAreaView
          style={[
            theme.width.full,
            theme.height.full,
            theme.flex.direction.column,
            theme.flex.flex,
            theme.flex.grow,
            colours.background.dark.default,
            Platform.OS === "web" && theme.gap.large,
          ]}
          edges={["left", "right", "top", "bottom"]}
        >
          <Children />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
