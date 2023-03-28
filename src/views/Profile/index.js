import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
