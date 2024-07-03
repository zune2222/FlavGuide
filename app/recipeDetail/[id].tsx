import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useRef } from "react";
import { blackColor, greyColor } from "../../components/color";
import { router, useLocalSearchParams } from "expo-router";

export default function RecipeDetail() {
  const { id } = useLocalSearchParams;
  const animationValues = useRef(
    Array(6)
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
          <Text style={styles.title}>오늘의 아침 식단입니다.</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[1].translateY }],
            opacity: animationValues[1].opacity,
            width: "100%",
            marginVertical: 10,
            marginLeft: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 20,
                marginRight: 10,
              }}
              source={{
                uri: "https://health.chosun.com/site/data/img_dir/2021/12/10/2021121000944_0.jpg",
              }}
            />

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.subtitle}>현미밥</Text>
              <Text style={styles.detailText}> 1공기,150g</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[2].translateY }],
            opacity: animationValues[2].opacity,
            width: "100%",
            marginVertical: 10,
            marginLeft: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 20,
                marginRight: 10,
              }}
              source={{
                uri: "https://recipe1.ezmember.co.kr/cache/recipe/2021/08/19/166b63a50307532455e6e54c0865aa741.jpg",
              }}
            />

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.subtitle}>된장국</Text>
              <Text style={styles.detailText}> 1그릇,200ml</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[3].translateY }],
            opacity: animationValues[3].opacity,
            width: "100%",
            marginVertical: 10,
            marginLeft: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 20,
                marginRight: 10,
              }}
              source={{
                uri: "https://i.namu.wiki/i/d0qGnKeHNUfddR958ID952f4CeXsOTy6h23VzvO0_x3ImOJtqZLoc9T_eNk6zGkzahMxsnrmvCRq4rG80k3lPtNXRcdgL2qQ8Y-XaO0YPKe_gAtEosUvLBMuXNRJ1vukmmUoYAJLM-kMsvU0LDCCrQ.webp",
              }}
            />

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.subtitle}>계란말이</Text>
              <Text style={styles.detailText}> 2개</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[4].translateY }],
            opacity: animationValues[4].opacity,
            width: "100%",
            marginVertical: 10,
            marginLeft: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 20,
                marginRight: 10,
              }}
              source={{
                uri: "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg",
              }}
            />

            <View style={{ flexDirection: "column" }}>
              <Text style={styles.subtitle}>김치</Text>
              <Text style={styles.detailText}> 50g</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[4].translateY }],
            opacity: animationValues[4].opacity,
            width: "100%",
            marginVertical: 30,
            marginLeft: 15,
          }}
        >
          <View style={{ marginBottom: 50 }}>
            <Text style={styles.subtitle}>영양정보</Text>
            <Text style={styles.detailText2}>칼로리 🍗 : 550 kcal</Text>
            <Text style={styles.detailText2}>단백질 🍅 : 20g</Text>
            <Text style={styles.detailText2}>지방 🍑 : 15g</Text>
            <Text style={styles.detailText2}>탄수화물 🍋‍🟩 : 85g</Text>
          </View>
        </Animated.View>
      </ScrollView>
      <View style={styles.travelButtonWrap}>
        <TouchableOpacity
          onPress={() => {
            router.push("/main");
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
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    width: "100%",
    color: blackColor,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "fontB",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
  },
  detailText: {
    fontFamily: "fontR",
    fontSize: 20,
    textAlign: "left",
  },
  detailText2: {
    fontFamily: "fontR",
    fontSize: 20,
    textAlign: "left",
    marginVertical: 5,
  },

  card: {
    width: "100%",
    height: 250,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
