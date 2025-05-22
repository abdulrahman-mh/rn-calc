import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const buttons = [
  ["C", "DEL", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]
];

export default function App() {
  const [input, setInput] = useState("");

  const handlePress = (value: string) => {
    if (value === "C") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || "0"}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  display: {
    flex: 2,
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  displayText: {
    fontSize: 60,
    color: "#000",
  },
  buttonsContainer: {
    flex: 5,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#e0e0e0",
    flex: 1,
    margin: 5,
    height: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 28,
    color: "#000",
  },
});