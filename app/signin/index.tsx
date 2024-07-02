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
} from "react-native";

export default function SignIn() {
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setInputState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

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
        <Text style={styles.title}>가입 정보를 입력해주세요😀</Text>
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
        <Text style={styles.subtitle}>이메일</Text>
        <TextInput
          style={styles.input}
          placeholder="abs@gmail.com"
          value={inputState.email}
          onChangeText={(value) => handleInputChange("email", value)}
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
        <Text style={styles.subtitle}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          secureTextEntry
          value={inputState.password}
          onChangeText={(value) => handleInputChange("password", value)}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: "100%",
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 10,
          position: "absolute",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              translateY: animationValues[3].translateY,
            },
          ],
          opacity: animationValues[3].opacity,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/initSetting")}
        >
          <Text style={styles.subtitle2}>계속하기</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: "90%",
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
