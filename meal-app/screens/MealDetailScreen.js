import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details screen!</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          ///
          //props.navigation.navigate({ routeName: "MealDetail" }); // both options are correct
          //props.navigation.push("MealDetail"); // push will show extra effect for self stack call
          ///
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
