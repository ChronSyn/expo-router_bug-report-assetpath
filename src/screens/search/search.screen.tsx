import { useTheme } from "@Themes/useTheme";
import { Text } from "react-native";

const SearchScreen = () => {
  const { theme, colours } = useTheme();

  return (
    <Text style={[theme.font.weight.bold, colours.font.light.default]}>
      A search screen on native
    </Text>
  );
};

export default SearchScreen;
