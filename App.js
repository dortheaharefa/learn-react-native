import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/welcome";
import Counter from "./components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome name="Dorthea" major="Teknologi Informasi" semester="7" />
      <Text style={styles.title}> APLIKASI PENGABUL HARAPAN</Text>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
