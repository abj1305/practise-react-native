import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.titleText, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "black",
  },
});

export default TitleText;
