import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen({ pickedNumberHandler }) {
  const [num, setNum] = useState("");

  const changeHandler = (newNumber) => {
    // console.log("hahaha", newNumber);
    setNum(newNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={num}
        onChangeText={changeHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton
            pressHandler={() => {
              // console.log("lll");
              const toNumber = parseInt(num);
              pickedNumberHandler(toNumber);
            }}
          >
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#b5899f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // borderBottomColor: "red",
    // borderWidth: 3,
  },
  textInput: {
    width: "30%",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginBottom: 10,
    color: "#ddb52f",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  singleButtonContainer: {
    flex: 1,
  },
});
