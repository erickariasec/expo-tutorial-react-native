import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import ButtonGradient from "./Button";
const { width } = Dimensions.get("window");

export default function App() {
  function SvgTop() {
    return (
      <Svg
        viewBox="0 0 500 120"
        preserveAspectRatio="none"
        style={{
          height: "300px",
          width: "100%",
        }}
      >
        <Path
          d="M0 89.99C150 110 246.05 73.06 501.13 90.56L500 0H0z"
          stroke="none"
          fill="#08f"
        />
      </Svg>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      <Image style={styles.logo} source={require("./assets/lyft-logo.png")} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Sign In to your account</Text>
        <TextInput style={styles.textInput} placeholder="jhon@email.com" />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <ButtonGradient />
        <Text style={styles.haveAccount}>Don't have an account?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    marginTop: 100,
    position: "absolute",
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingLeft: 40,
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  subtitle: {
    paddingLeft: 40,
    fontSize: 20,
    color: "gray",
    alignSelf: "flex-start",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    paddingRight: 40,
    fontSize: 14,
    color: "gray",
    marginTop: 20,
    alignSelf: "flex-end",
  },
  haveAccount: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  },
});
