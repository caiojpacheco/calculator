import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./src/components/Button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";

export default function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("");
  const [clearLabel, setClearLabel] = useState("AC");

  const handleNumberClick = (value: string) => {
    if (operator) {
      setSecondValue((prev) => prev + value);
    } else {
      setFirstValue((prev) => prev + value);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (firstValue && !secondValue) {
      setOperator(op);
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    if (!isNaN(num1) && !isNaN(num2)) {
      let result = 0;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "X":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : 0;
          break;
        default:
          break;
      }
      setFirstValue(result.toString());
      setSecondValue("");
      setOperator("");
    }
  };

  const clearCalculator = () => {
    setFirstValue("");
    setSecondValue("");
    setOperator("");
    setClearLabel("AC");
  };

  const toggleSign = () => {
    if (operator) {
      setSecondValue((prev) => (prev ? (-parseFloat(prev)).toString() : ""));
    } else {
      setFirstValue((prev) => (prev ? (-parseFloat(prev)).toString() : ""));
    }
  };

  const percentage = () => {
    if (operator) {
      setSecondValue((prev) =>
        prev ? (parseFloat(prev) / 100).toString() : ""
      );
    } else {
      setFirstValue((prev) =>
        prev ? (parseFloat(prev) / 100).toString() : ""
      );
    }
  };

  const displayValue = secondValue || firstValue || "0";

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnRow}>
          <Button
            text={clearLabel}
            backgroundColor="#A5A5A5"
            onPress={clearCalculator}
          />
          <Button text={"+/-"} backgroundColor="#A5A5A5" onPress={toggleSign} />
          <Button text={"%"} backgroundColor="#A5A5A5" onPress={percentage} />
          <Button
            text={"/"}
            backgroundColor="#FF9F0A"
            onPress={() => handleOperatorClick("/")}
          />
        </View>
        <View style={styles.btnRow}>
          <Button text={"7"} onPress={() => handleNumberClick("7")} />
          <Button text={"8"} onPress={() => handleNumberClick("8")} />
          <Button text={"9"} onPress={() => handleNumberClick("9")} />
          <Button
            text={"X"}
            backgroundColor="#FF9F0A"
            onPress={() => handleOperatorClick("X")}
          />
        </View>
        <View style={styles.btnRow}>
          <Button text={"4"} onPress={() => handleNumberClick("4")} />
          <Button text={"5"} onPress={() => handleNumberClick("5")} />
          <Button text={"6"} onPress={() => handleNumberClick("6")} />
          <Button
            text={"-"}
            backgroundColor="#FF9F0A"
            onPress={() => handleOperatorClick("-")}
          />
        </View>
        <View style={styles.btnRow}>
          <Button text={"1"} onPress={() => handleNumberClick("1")} />
          <Button text={"2"} onPress={() => handleNumberClick("2")} />
          <Button text={"3"} onPress={() => handleNumberClick("3")} />
          <Button
            text={"+"}
            backgroundColor="#FF9F0A"
            onPress={() => handleOperatorClick("+")}
          />
        </View>
        <View style={styles.btnRow}>
          <View style={styles.iconCalculator}>
            <TouchableOpacity style={styles.btnIcon}>
              <FontAwesome5 name="calculator" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <Button text={"0"} onPress={() => handleNumberClick("0")} />
          <Button text={","} onPress={() => handleNumberClick(".")} />
          <Button
            text={"="}
            backgroundColor="#FF9F0A"
            onPress={calculateResult}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  displayContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  displayText: {
    fontSize: 90,
    color: "white",
  },
  btnContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
  },
  btnRow: {
    flexDirection: "row",
  },
  iconCalculator: {
    height: 92,
    width: 92,
    borderWidth: 1,
    padding: 10,
  },
  btnIcon: {
    backgroundColor: "#333",
    width: "100%",
    height: "100%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
