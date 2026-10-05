import { View, Text } from "react-native";

export default function Welcome({ name, major, semester }) {
  return (
    <View>
      <Text>Selamat datang di aplikasi saya {name}!</Text>
      <Text>nama kamuuuu, {name} kannn!</Text>
      <Text>Program Studi: {major}</Text>
      <Text>Semester: {semester}</Text>
    </View>
  );
}
