import { View, Text, Button } from "react-native";
import { StyleSheet} from "react-native";
import { useState } from "react";


export default function App() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Jumlah: {jumlah}</Text>

      <Button title="Tambah" onPress={() => setJumlah(jumlah + 1)} />
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
