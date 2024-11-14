import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  onPress?: () => void;
}

export function Button({
  text = "",
  backgroundColor = "#333",
  onPress,
}: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 92,
    height: 92,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    backgroundColor: "#333",
    width: "100%",
    height: "100%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 25,
  },
});
