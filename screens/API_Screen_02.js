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
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ flex: 2, flexDirection: "row" }}>
        {/* Title Left */}
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <Image
            style={{
              flex: 2,
              width: 36,
              height: 36,
              resizeMode: "contain",
              marginRight: 100
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
            <Text style={{ fontSize: 20, fontWeight: 700 ,textAlign:"center"}}> Hi Mariadb</Text>
            <Text style={{ fontSize: 14, fontWeight: 700, color: "#9095A0" }}>
              Have agratet day a head
            </Text>
          </View>
        </View>
      </View>
      {/* Input Search */}
      <View style={{ flex: 2 }}>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 5,
            width: 334,
            height: 44,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={{ flex: 1, width: 26, height: 26, resizeMode: "contain" }}
            source={require("../assets/Frame (2).png")}
          ></Image>
          <TextInput style={{ flex: 9 }} placeholder="Search"></TextInput>
        </View>
      </View>
      <View style={{ flex: 8 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#D3D5D9",
            width: 335,
            borderRadius: 15,
            flexDirection: "row",
            height: 48,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ flex: 1, width: 24, height: 24, resizeMode: "contain" }}
            source={require("../assets/Frame (4).png")}
          ></Image>
          <Text Style={{ flex: 9 }}>UI task web page</Text>

          <Image
            style={{ flex: 1, width: 24, height: 24, resizeMode: "contain" }}
            source={require("../assets/Frame (3).png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#00BDD6",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            width: 69,
            height: 69
          }}
          onPress={()=>navigation.navigate("API_Screen_03")}
        >
          <Text style={{ fontSize: 50, color: "white", textAlign: "center" }}>
            +
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
