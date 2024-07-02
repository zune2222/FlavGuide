import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef } from "react";
import { blackColor, greyColor } from "../../components/color";
import { router } from "expo-router";

export default function Main() {
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

    Animated.stagger(200, animations).start(); // 각 애니메이션 사이에 200ms 지연
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
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
          <Text style={styles.subtitle}>오늘 준비된 식단을 만나보세요.</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[1].translateY }],
            opacity: animationValues[1].opacity,
            width: "100%",
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.subtitle}>아침🔅</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[1].translateY }],
            opacity: animationValues[1].opacity,
            width: "100%",
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.subtitle}>점심🥙</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[1].translateY }],
            opacity: animationValues[1].opacity,
            width: "100%",
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.subtitle}>저녁🥘</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
      <View style={styles.travelButtonWrap}>
        <TouchableOpacity
          onPress={() => {
            router.push("/setting");
          }}
          style={styles.travelButton}
        >
          <Text style={{ fontSize: 35 }}>🥗</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    marginTop: 50,
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
  card: {
    width: "100%",
    height: 250,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  cardTop: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 40,
    borderStartStartRadius: 10,
    borderStartEndRadius: 10,
    justifyContent: "center",
    paddingLeft: 10,
  },
  travelButtonWrap: {
    width: "100%",
    height: 100,
    position: "absolute",
    top: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
  travelButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#00e599",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
});
