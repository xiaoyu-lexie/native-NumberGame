import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ pressHandler, children }) => {
  return (
    <View style={styles.buttonViewContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonPressableContainer, styles.pressedForIosEffect]
            : styles.buttonPressableContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#aec646" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonViewContainer: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },
  buttonPressableContainer: {
    backgroundColor: "#72063c",

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    // margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressedForIosEffect: {
    opacity: 0.2,
  },
});
