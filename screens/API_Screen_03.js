import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import { useState } from "react";

export default function App({ navigation }) {
  const [job, setJob] = useState("");
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ flex: 2, flexDirection: "row-reverse" }}>
        {/* Title Left */}
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <Image
            style={{
              flex: 2,
              width: 36,
              height: 36,
              resizeMode: "contain",
              marginLeft: 100
            }}
            source={require("../assets/Icon Button 11.png")}
          ></Image>
        </TouchableOpacity>
        {/* Title Right */}
        <View
          style={{
            flex: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ flex: 1, width: 50, height: 50, resizeMode: "contain" }}
            source={require("../assets/Frame (1).png")}
          ></Image>
          <View style={{ flexDirection: "column", textAlign: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: 700, textAlign: "center" }}
            >
              {" "}
              Hi Mariadb
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 700, color: "#9095A0" }}>
              Have agratet day a head
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "Epilogue",
            fontWeight: "700",
            fontSize: 32,
            lineHeight: 48,
            alignItems: "center"
          }}
        >
          ADD YOUR JOB
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            height: 43
          }}
        >
          <Image
            style={{ flex: 1, width: 20, height: 20, resizeMode: "contain" }}
            source={require("../assets/Frame05.png")}
          ></Image>
          <TextInput
            style={{ flex: 9 }}
            placeholder="input your job"
            onChangeText={(text) => {
              setJob(text);
            }}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          flex: 2,
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
            navigation.navigate("API_Screen_02", { name: name });
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            FINISH {"->"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6,justifyContent:"center" }}>
        <Image
          style={{ width: 190, height: 170 }}
          source={require("../assets/Image 95.png")}
        ></Image>
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
