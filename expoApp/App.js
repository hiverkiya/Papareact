import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-rn";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tw("p-4")}>Welcome to our app</Text>
      <StatusBar style={tw("h-96 w-96")} />
    </SafeAreaView>
  );
}
