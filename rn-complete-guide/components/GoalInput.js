import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} /> */}
          {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View> 
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel}/> 
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // bydefault, vie wonly takes the space it needs (in this case the button and inputbox comined, hence need to put flex:1)
    flexDirection: "column", // this is anywhichways default
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%", // by default, view will only take amount of space needed for its children. Hence to add some space in between added this property 
  },
  button: { // this view around button is added as you cant add  style to button as of now.
    width: "40%",
  },
});

export default GoalInput;
