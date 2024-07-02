import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";
import { blackColor, greyColor } from "../components/color";
import { useEffect, useRef } from "react";
export default function Page() {
  const animationValues = useRef(
    Array(4)
      .fill(null)
      .map(() => ({
        translateY: new Animated.Value(50),
        opacity: new Animated.Value(0),
      }))
  ).current;

  useEffect(() => {
    const animations = animationValues.map((anim) =>
      Animated.parallel([
        Animated.timing(anim.translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(anim.opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.stagger(200, animations).start(); // 200ms delay between each animation
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY: animationValues[0].translateY }],
          opacity: animationValues[0].opacity,
          width: "100%",
        }}
      >
        <Text style={styles.title}>FlavGuide🥗</Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: animationValues[1].translateY }],
          opacity: animationValues[1].opacity,
          width: "100%",
        }}
      >
        <Text style={styles.subtitle}>가족을 위한 AI 개인 영양사</Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: animationValues[2].translateY }],
          opacity: animationValues[2].opacity,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.logo}
          source={require("../assets/img/thinkingman.png")}
        ></Image>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY: animationValues[3].translateY }],
          opacity: animationValues[3].opacity,
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/signin");
          }}
        >
          <Text style={styles.subtitle2}>FlavGuide로 고민해결</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 35,
    height: "100%",
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 50,
    borderRadius: 50,
    marginTop: 50,
  },
  pager: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontFamily: "fontB",
    fontSize: 50,
    textAlign: "left",
    fontWeight: "bold",
    width: "100%",
    color: blackColor,
  },
  subtitle: {
    fontFamily: "fontM",
    fontSize: 20,
    textAlign: "left",
    width: "100%",
    marginTop: 5,
  },
  title2: {
    fontFamily: "fontB",
    fontSize: 20,
    textAlign: "center",
  },
  subtitle2: {
    fontFamily: "fontB",
    fontSize: 25,
    textAlign: "center",
    color: greyColor,
  },
  button: {
    backgroundColor: "#00e599",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
