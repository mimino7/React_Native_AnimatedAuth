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
  withDelay,
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
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 800 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [0, 440]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {
        duration: 800,
      }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 500 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(
              500,
              withTiming(1, {
                duration: 800,
              })
            )
          : withTiming(0, { duration: 800 }),
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
  };
  const registerHandler = () => {
    imagePosition.value = 0;
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
        <Pressable
          // style={stylses.closeButtonContainer}
          onPress={() => (imagePosition.value = 1)}
        >
          <Animated.View
            style={[styles.closeButtonContainer, closeButtonAnimatedStyle]}
          >
            <Text
              style={{ fontSize: 20, lineHeight: 30 }}
              // onPress={() => (imagePosition.value = 1)}
            >
              ╳
            </Text>
          </Animated.View>
        </Pressable>
      </Animated.View>

      <View style={styles.button_container}>
        {/* +++++++++++ Buttons  Hidden with Animated +++++++++++++++ */}
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>

        {/* +++++++++++ input form  +++++++++++++++++++ */}

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput placeholder="Email" style={styles.textInput} />
          <TextInput placeholder="Full Name" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <View style={styles.formButton}>
            <Text style={styles.buttonText}>Log In</Text>
          </View>
        </Animated.View>
      </View>

      <StatusBar hidden style="auto" />
    </View>
  );
}
