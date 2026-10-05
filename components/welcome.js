import { View, Text } from "react-native";

export default function Welcome({ name }) {
  return (
    <View>
      <Text>Selamat datang di aplikasi saya {name}!</Text>
    </View>
  );
}
