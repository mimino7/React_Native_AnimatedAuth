import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Svg, { Image } from "react-native-svg";
import styles from "./styles";

export default function App() {
  const { width, height } = Dimensions.get("window");

  console.log(width);
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        {/* StyleSheet.absoluteFill - зто то же самое что и style={position: 'absolute', left: 0, right: 0, top: 0, bottom: 0} */}
        <Svg width={width + 1} height={height / 2}>
          <Image
            href={require("./assets/splash_2.jpg")}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice" // на весь экран
          />
        </Svg>

        {/* +++++++++++ closeButton +++++++++++++++ */}

        <View style={styles.closeButtonContainer}>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.button_container}>
        {/* +++++++++++ Hidden with Animated +++++++++++++++ */}

        {/* <View style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>REGISTR</Text>
        </View> */}

        {/* +++++++++++ input form  +++++++++++++++++++ */}

        <View style={styles.formInputContainer}>
          <TextInput placeholder="Email" style={styles.textInput} />
          <TextInput placeholder="Full Name" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <View style={styles.formButton}>
            <Text style={styles.buttonText}>Log In</Text>
          </View>
        </View>
      </View>

      <StatusBar hidden style="auto" />
    </View>
  );
}
