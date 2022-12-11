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
        <Svg width={width + 1} height={height}>
          <Image
            href={require("./assets/splash_2.jpg")}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice" // на весь экран
          />
        </Svg>
      </View>

      <View style={styles.button_container}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>REGISTR</Text>
        </View>
      </View>

      <StatusBar hidden style="auto" />
    </View>
  );
}
