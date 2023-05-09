import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient() {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#0099FF", "#0088FF", "#0077FF"]}
        style={styles.button}
      >
        <Text style={styles.text}>SIGN IN</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginTop: 60,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
