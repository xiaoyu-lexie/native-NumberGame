import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickedNumberHandler = (pickedNumber) => {
    // console.log("typeof pickedNumber", typeof pickedNumber);
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  }

  if (gameIsOver) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
