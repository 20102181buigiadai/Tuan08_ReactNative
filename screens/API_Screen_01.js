import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function App({ navigation }) {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 6,
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 271, height: 271 }}
          source={require("../assets/Image 95.png")}
        ></Image>
        <Text
          style={{
            fontFamily: "Epilogue",
            fontWeight: 700,
            textAlign: "center",
            fontSize: 24,
            color: "#8353E2"
          }}
        >
          MANAGE YOUR {"\n"}
          TASK
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderRadius: 10,
          height: 43
        }}
      >
        <Image
          style={{ flex: 1, width: 20, height: 20, resizeMode: "contain" }}
          source={require("../assets/Frame.png")}
        ></Image>
        <TextInput
          style={{ flex: 9 }}
          placeholder="Enter your name"
          onChangeText={(text) => {
            setName(text);
          }}
        ></TextInput>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <TouchableOpacity
          style={{
            width: "45%",
            height: 44,
            backgroundColor: "#00BDD6",
            justifyContent: "center",
            borderRadius: 10
          }}
          onPress={() => {
            navigation.navigate("API_Screen_02",{name: name});
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            GET STARTED {"->"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
