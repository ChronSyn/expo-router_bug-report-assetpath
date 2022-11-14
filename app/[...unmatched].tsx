import { Link, Unmatched } from "expo-router";

// export default Unmatched;

import { useTheme } from "@Themes/useTheme";
import { View, Text } from "react-native";
import TextInput from "@Components/TextInput/TextInput";
import React from "react";

const FourOhFour = () => {
  const { colours, theme } = useTheme();
  return (
    <View style={[theme.width.full, theme.height.full, theme.gap.small, theme.padding.all.small]}>
      <Text
        style={[
          theme.font.size.large,
          theme.font.weight.bold,
          colours.font.light.default,
        ]}
      >
        Oh dear.
      </Text>
      <Text
        style={[
          theme.font.size.small,
          theme.font.weight.medium,
          colours.font.light.default,
        ]}
      >
        You're somewhere that doesn't exist.{"\n"}I know how it sounds, but it's the
        truth.
      </Text>
      <Link href="/">
        <Text style={[
          theme.font.size.xxxsmall,
          theme.font.weight.semiBold,
          colours.font.secondary.faded,
        ]}>{"< "}Go home{" >"}</Text>
      </Link>
    </View>
  );
};

export default FourOhFour;
