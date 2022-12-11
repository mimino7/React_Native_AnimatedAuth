import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import Svg, { Image, ClipPath, Ellipse } from "react-native-svg";
import styles from "./styles";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  console.log(">>>", imagePosition.value);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      opacity: 1,
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
  };
  const registerHandler = () => {
    imagePosition.value = 0;
  };

  const closeHandler = () => {
    imagePosition.value = 1;
  };

  console.log(width);
  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        {/* StyleSheet.absoluteFill - зто то же самое что и style={position: 'absolute', left: 0, right: 0, top: 0, bottom: 0} */}
        <Svg width={width + 1} height={height + 100}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require("./assets/splash_2.jpg")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice" // на весь экран
            clipPath="url(#clipPathId)"
          />
        </Svg>

        {/* +++++++++++ closeButton +++++++++++++++ */}

        <Pressable style={styles.closeButtonContainer} onPress={closeHandler}>
          <Text>X</Text>
        </Pressable>
      </Animated.View>

      <View style={styles.button_container}>
        {/* +++++++++++ Hidden with Animated +++++++++++++++ */}

        <Pressable style={styles.button} onPress={loginHandler}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={registerHandler}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>

        {/* +++++++++++ input form  +++++++++++++++++++ */}

        {/* <View style={styles.formInputContainer}>
          <TextInput placeholder="Email" style={styles.textInput} />
          <TextInput placeholder="Full Name" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <View style={styles.formButton}>
            <Text style={styles.buttonText}>Log In</Text>
          </View>
        </View> */}
      </View>

      <StatusBar hidden style="auto" />
    </View>
  );
}
