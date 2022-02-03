import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = (props) => {
  return (
    <Text style={{ ...styles.customText, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  customText: {
    fontFamily: "open-sans",
    color: "black",
  },
});

export default CustomText;
