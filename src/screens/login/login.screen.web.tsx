import { useTheme } from "@Themes/useTheme";
import { View, Text } from "react-native";

const LoginScreen = () => {
  const { colours, theme } = useTheme();
  return (
    <View
      style={[
        theme.width.full,
        theme.height.full,
        colours.background.primary.default,
      ]}
    >
      <Text
        style={[
          colours.font.light.default,
          theme.font.size.large,
          theme.font.weight.bold,
        ]}
      >Login Screen on web</Text>
    </View>
  );
};

export default LoginScreen;