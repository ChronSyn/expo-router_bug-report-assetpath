import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "@Themes/useTheme";

const Test = () => {
  const { theme, colours } = useTheme();
  return (
    <View style={[
      theme.padding.top.xxxlarge,
    ]}>
      <Link href="/login">
        <Text
          style={[
            theme.font.size.xxxsmall,
            theme.font.weight.semiBold,
            colours.font.secondary.default,
          ]}
        >
          Go to login
        </Text>
      </Link>
      <Link href="/search">
        <Text
          style={[
            theme.font.size.xxxsmall,
            theme.font.weight.semiBold,
            colours.font.secondary.default,
          ]}
        >
          Go to search
        </Text>
      </Link>
      <Link href="/nested/123">
        <Text
          style={[
            theme.font.size.xxxsmall,
            theme.font.weight.semiBold,
            colours.font.secondary.default,
          ]}
        >
          Go to /nested/123 (please reload that page after navigating to see bug)
        </Text>
      </Link>
    </View>
  );
};

export default Test;