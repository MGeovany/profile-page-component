import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default ({ icon, focused }) => {
  const { isDarkmode } = useTheme();
  return (
    <Ionicons
      name={icon}
      style={{ marginBottom: -7 }}
      size={24}
      color={
        focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.dark100
          : "rgb(143, 155, 179)"
      }
    />
  );
};
