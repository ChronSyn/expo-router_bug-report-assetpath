import { Text } from "react-native";
import { FC } from "react";
import { useTheme } from "@Themes/useTheme";

const DeeplyNestedScreen: FC = () => {
  const { theme, colours } = useTheme();
  return (
    <Text style={[theme.font.weight.bold, colours.font.light.default]}>
      A nested screen
    </Text>
  );
};

export default DeeplyNestedScreen;
