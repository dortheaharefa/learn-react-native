import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <View>
      <Text>Jumlah: {jumlah}</Text>

      <Button
        title="Tambah"
        onPress={() => setJumlah(jumlah + 1)}
      />
    </View>
  );
}