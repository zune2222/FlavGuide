import { greyColor } from "@/components/color";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function SignIn() {
  const [inputState, setInputState] = useState({
    height: "",
    weight: "",
    age: "",
  });

  const handleInputChange = (field, value) => {
    setInputState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const animationValues = useRef(
    Array(5)
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
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 20,
          transform: [
            {
              translateY: animationValues[0].translateY,
            },
          ],
          opacity: animationValues[0].opacity,
        }}
      >
        <Text style={styles.title}>추가 정보를 입력해주세요🤟</Text>
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 10,
          transform: [
            {
              translateY: animationValues[1].translateY,
            },
          ],
          opacity: animationValues[1].opacity,
        }}
      >
        <Text style={styles.subtitle}>키</Text>
        <TextInput
          style={styles.input}
          placeholder="175"
          value={inputState.height}
          onChangeText={(value) => handleInputChange("height", value)}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 10,
          transform: [
            {
              translateY: animationValues[2].translateY,
            },
          ],
          opacity: animationValues[2].opacity,
        }}
      >
        <Text style={styles.subtitle}>몸무게</Text>
        <TextInput
          style={styles.input}
          placeholder="65"
          value={inputState.weight}
          onChangeText={(value) => handleInputChange("weight", value)}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 10,
          transform: [
            {
              translateY: animationValues[3].translateY,
            },
          ],
          opacity: animationValues[3].opacity,
        }}
      >
        <Text style={styles.subtitle}>나이</Text>
        <TextInput
          style={styles.input}
          placeholder="23"
          value={inputState.age}
          onChangeText={(value) => handleInputChange("age", value)}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 10,
          transform: [
            {
              translateY: animationValues[3].translateY,
            },
          ],
          opacity: animationValues[3].opacity,
        }}
      >
        <Text style={styles.subtitle}>알레르기가 있는 음식을 골라주세요.</Text>
        <TextInput
          style={styles.input}
          placeholder="23"
          value={inputState.age}
          onChangeText={(value) => handleInputChange("age", value)}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 10,
          transform: [
            {
              translateY: animationValues[3].translateY,
            },
          ],
          opacity: animationValues[3].opacity,
        }}
      >
        <Text style={styles.subtitle}>선호하는 음식을 골라주세요.</Text>
        <TextInput
          style={styles.input}
          placeholder="23"
          value={inputState.age}
          onChangeText={(value) => handleInputChange("age", value)}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 10,
          transform: [
            {
              translateY: animationValues[3].translateY,
            },
          ],
          opacity: animationValues[3].opacity,
        }}
      >
        <Text style={styles.subtitle}>초대 코드가 있다면 넣어주세요!</Text>
        <TextInput
          style={styles.input}
          placeholder="23"
          value={inputState.age}
          onChangeText={(value) => handleInputChange("age", value)}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginTop: 10,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              translateY: animationValues[4].translateY,
            },
          ],
          opacity: animationValues[4].opacity,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/signDone")}
        >
          <Text style={styles.subtitle2}>계속하기</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  input: {
    width: "85%",
    height: 50,
    borderWidth: 0,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#e9e9e9",
    fontFamily: "fontR",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "fontB",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "fontB",
    textAlign: "left",
    marginBottom: 10,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#00e599",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle2: {
    fontFamily: "fontB",
    fontSize: 25,
    textAlign: "center",
    color: greyColor,
  },
});
