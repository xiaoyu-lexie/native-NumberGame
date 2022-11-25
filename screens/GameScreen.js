import { View, Text, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
  console.log("min", min, "max", max);
  const rdn = Math.floor(Math.random() * (max - min)) + min;

  if (rdn === exclude) {
    console.log("memememem");
    return generateRandomBetween(min, max, exclude);
  } else {
    return rdn;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

console.log("skdfjsd");
const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuessByPhone, setCurrentGuessByPhone] = useState(initialGuess);

  useEffect(() => {
    if (currentGuessByPhone === userNumber) {
      gameOverHandler();
    }
  }, [currentGuessByPhone]);

  const nextGuessHandler = (direction) => {
    if (direction === "lower") {
      if (currentGuessByPhone < userNumber) {
        Alert.alert("Don't lie", "The guess cannot go lower...");
        return;
      }

      maxBoundary = currentGuessByPhone;
      setCurrentGuessByPhone(
        generateRandomBetween(minBoundary, maxBoundary, currentGuessByPhone)
      );
    } else {
      if (currentGuessByPhone > userNumber) {
        Alert.alert("Don't lie", "The guess cannot go higher...");
        return;
      }

      minBoundary = currentGuessByPhone + 1;
      setCurrentGuessByPhone(
        generateRandomBetween(minBoundary, maxBoundary, currentGuessByPhone)
      );
    }

    // console.log("kkk");
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuessByPhone}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton pressHandler={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton pressHandler={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
