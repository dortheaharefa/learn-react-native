import { StyleSheet} from "react-native";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function App() {
  const [nama, setNama] = useState("");

  return (
    <View style={styles.container}>
      <Text>Nama:</Text>

      <TextInput
        placeholder="Ketik nama kamu"
        value={nama}
        onChangeText={setNama}
      />

      <Text>Halo, {nama}!</Text>
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
