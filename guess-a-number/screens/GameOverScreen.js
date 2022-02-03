import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import CustomText from "../components/CustomText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MyButton from "../components/MyButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //fadeDuration={1000}
          source={require("../assets/images/success.png")}
          // below is the way to load internet image
          // source={{
          //   uri: "https://sp-images.summitpost.org/449444.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=91710d34afba28486a563e99e21eb062",
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <CustomText style={styles.resultTextContainer}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundNumber} </Text>rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </CustomText>
      <View style={styles.buttonContainer}>
        <MyButton onPress={props.onRestart}>NEW GAME</MyButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
  },
  resultTextContainer: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default GameOverScreen;
