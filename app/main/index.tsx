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
          <TouchableOpacity
            onPress={() => {
              router.push("/recipeDetail/${1}");
            }}
            style={styles.card}
          >
            <View style={styles.cardTop}>
              <Text style={styles.subtitle}>
                아침🔅 - 현미밥,된장국,계란말이
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: "50%",
                  height: 210,
                  borderBottomLeftRadius: 10,
                }}
                source={{
                  uri: "https://health.chosun.com/site/data/img_dir/2021/12/10/2021121000944_0.jpg",
                }}
              ></Image>
              <View
                style={{
                  flex: 1,
                  flexWrap: "wrap",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={{
                    uri: "https://recipe1.ezmember.co.kr/cache/recipe/2021/08/19/166b63a50307532455e6e54c0865aa741.jpg",
                  }}
                  style={{ width: "100%", height: 105 }}
                />
                <Image
                  source={{
                    uri: "https://i.namu.wiki/i/d0qGnKeHNUfddR958ID952f4CeXsOTy6h23VzvO0_x3ImOJtqZLoc9T_eNk6zGkzahMxsnrmvCRq4rG80k3lPtNXRcdgL2qQ8Y-XaO0YPKe_gAtEosUvLBMuXNRJ1vukmmUoYAJLM-kMsvU0LDCCrQ.webp",
                  }}
                  style={{
                    width: "100%",
                    height: 105,
                    borderBottomRightRadius: 10,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[1].translateY }],
            opacity: animationValues[1].opacity,
            width: "100%",
          }}
        >
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.subtitle}>
                점심🥙 - 불고기,잡곡밥,시금치나물
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: "50%",
                  height: 210,
                  borderBottomLeftRadius: 10,
                }}
                source={{
                  uri: "https://i.namu.wiki/i/qY5dX5u0ipO1v5mKDOtp-098jdG9OxTM-_HEzhcPwO7eEmW5RiF8fPUAyE3Tk9OGI5bo_UyYRMseOUOG2nLAJyo4nUk1WO_Ur63T58H_a7oOaB7STi052w-F0ps0mSDxl_9FqtH5rdpbdEC3yWej-Q.webp",
                }}
              ></Image>
              <View
                style={{
                  flex: 1,
                  flexWrap: "wrap",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={{
                    uri: "https://health.chosun.com/site/data/img_dir/2018/08/01/2018080102091_0.jpg",
                  }}
                  style={{ width: "100%", height: 105 }}
                />
                <Image
                  source={{
                    uri: "https://recipe1.ezmember.co.kr/cache/recipe/2015/06/18/83d5b0a7dddcc3860440f04b6a046a54.jpg",
                  }}
                  style={{
                    width: "100%",
                    height: 105,
                    borderBottomRightRadius: 10,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateY: animationValues[1].translateY }],
            opacity: animationValues[1].opacity,
            width: "100%",
          }}
        >
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.subtitle}>
                저녁🥘 - 현미밥,삼겹살 구이, 된장찌개
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: "50%",
                  height: 210,
                  borderBottomLeftRadius: 10,
                }}
                source={{
                  uri: "https://health.chosun.com/site/data/img_dir/2021/12/10/2021121000944_0.jpg",
                }}
              ></Image>
              <View
                style={{
                  flex: 1,
                  flexWrap: "wrap",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  source={{
                    uri: "https://recipe1.ezmember.co.kr/cache/recipe/2021/08/19/166b63a50307532455e6e54c0865aa741.jpg",
                  }}
                  style={{ width: "100%", height: 105 }}
                />
                <Image
                  source={{
                    uri: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
                  }}
                  style={{
                    width: "100%",
                    height: 105,
                    borderBottomRightRadius: 10,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
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
