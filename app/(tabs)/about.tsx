import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text>
        This is a basic calculator built using Expo + React Native + TypeScript.
      </Text>
      <Link href="/" style={styles.link}>
        Back to Calculator
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  link: { marginTop: 20, color: "blue", fontSize: 16 },
});
