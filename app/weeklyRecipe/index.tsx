import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const weeklyMenu = [
  { day: "월요일", meal: "아침", menu: "현미밥, 된장국, 계란말이, 김치" },
  { day: "월요일", meal: "점심", menu: "불고기, 잡곡밥, 시금치나물, 김치" },
  {
    day: "월요일",
    meal: "저녁",
    menu: "삼겹살 구이, 쌈채소, 쌈장, 된장찌개, 현미밥",
  },
  { day: "화요일", meal: "아침", menu: "현미밥, 미역국, 계란프라이, 김치" },
  { day: "화요일", meal: "점심", menu: "닭갈비, 잡곡밥, 콩나물무침, 김치" },
  { day: "화요일", meal: "저녁", menu: "갈치조림, 현미밥, 시금치나물, 김치" },
  { day: "수요일", meal: "아침", menu: "현미밥, 된장국, 오믈렛, 김치" },
  { day: "수요일", meal: "점심", menu: "제육볶음, 잡곡밥, 무생채, 김치" },
  { day: "수요일", meal: "저녁", menu: "불고기, 현미밥, 시금치나물, 김치" },
  { day: "목요일", meal: "아침", menu: "현미밥, 미역국, 계란말이, 김치" },
  { day: "목요일", meal: "점심", menu: "닭볶음탕, 잡곡밥, 시금치나물, 김치" },
  {
    day: "목요일",
    meal: "저녁",
    menu: "삼겹살 구이, 쌈채소, 쌈장, 된장찌개, 현미밥",
  },
  { day: "금요일", meal: "아침", menu: "현미밥, 된장국, 오믈렛, 김치" },
  { day: "금요일", meal: "점심", menu: "불고기, 잡곡밥, 시금치나물, 김치" },
  {
    day: "금요일",
    meal: "저녁",
    menu: "삼겹살 구이, 쌈채소, 쌈장, 된장찌개, 현미밥",
  },
];

const ingredients = [
  { category: "곡류", item: "현미", amount: "7컵" },
  { category: "곡류", item: "잡곡", amount: "5컵" },
  { category: "육류 및 해산물", item: "소고기 (불고기용)", amount: "1kg" },
  { category: "육류 및 해산물", item: "돼지고기 (삼겹살)", amount: "1kg" },
  { category: "육류 및 해산물", item: "돼지고기 (제육볶음용)", amount: "500g" },
  { category: "육류 및 해산물", item: "닭고기 (닭갈비용)", amount: "500g" },
  { category: "육류 및 해산물", item: "닭고기 (닭볶음탕용)", amount: "500g" },
  { category: "육류 및 해산물", item: "갈치 (조림용)", amount: "2마리" },
  { category: "채소", item: "애호박", amount: "3개" },
  { category: "채소", item: "양파", amount: "7개" },
  { category: "채소", item: "대파", amount: "10개" },
  { category: "채소", item: "시금치", amount: "1kg" },
  { category: "채소", item: "콩나물", amount: "500g" },
  { category: "채소", item: "무", amount: "2개" },
  { category: "채소", item: "상추", amount: "2포기" },
  { category: "채소", item: "깻잎", amount: "1팩" },
  { category: "채소", item: "파프리카", amount: "2개" },
  { category: "채소", item: "감자", amount: "5개" },
  { category: "기타", item: "계란", amount: "20개" },
  { category: "기타", item: "두부", amount: "5모" },
  { category: "기타", item: "마늘", amount: "5통" },
  { category: "기타", item: "미역", amount: "100g" },
  { category: "기타", item: "된장", amount: "1통" },
  { category: "기타", item: "간장", amount: "1병" },
  { category: "기타", item: "고추장", amount: "1병" },
  { category: "기타", item: "쌈장", amount: "1병" },
  { category: "기타", item: "참기름", amount: "1병" },
  { category: "기타", item: "설탕", amount: "500g" },
  { category: "기타", item: "김치", amount: "2kg" },
];

const renderMenuItem = ({ item }: { item: any }) => (
  <View style={styles.row}>
    <Text style={styles.cell}>{item.day}</Text>
    <Text style={styles.cell}>{item.meal}</Text>
    <Text style={styles.cell}>{item.menu}</Text>
  </View>
);

const renderIngredientItem = ({ item }: { item: any }) => (
  <View style={styles.row}>
    <Text style={styles.cell}>{item.category}</Text>
    <Text style={styles.cell}>{item.item}</Text>
    <Text style={styles.cell}>{item.amount}</Text>
  </View>
);

export default function WeeklyMenu() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>주간 식단</Text>
        <FlatList
          data={weeklyMenu}
          renderItem={renderMenuItem}
          keyExtractor={(item, index) => `${item.day}-${item.meal}-${index}`}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.headerCell}>요일</Text>
              <Text style={styles.headerCell}>식사</Text>
              <Text style={styles.headerCell}>메뉴</Text>
            </View>
          }
          stickyHeaderIndices={[0]}
        />
        <Text style={styles.title}>필요한 재료 목록 및 양</Text>
        <FlatList
          data={ingredients}
          renderItem={renderIngredientItem}
          keyExtractor={(item, index) =>
            `${item.category}-${item.item}-${index}`
          }
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.headerCell}>카테고리</Text>
              <Text style={styles.headerCell}>재료</Text>
              <Text style={styles.headerCell}>양</Text>
            </View>
          }
          stickyHeaderIndices={[0]}
        />
      </View>
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
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    padding: 10,
  },
});
