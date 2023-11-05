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

export default function App({ navigation, route }) {
  const [newjob, setJob] = useState("");
  const { dataJob, idJob, name } = route.params;
  const url = "https://nwhfql-8080.csb.app/Job";

  function addJob() {
    if (newjob.trim() === "") {
      alert("Không được để trống công việc");
    } else {
      // Gửi yêu cầu GET để lấy danh sách công việc hiện tại của name
      fetch(`${url}/?name=${encodeURIComponent(name)}`)
        .then((response) => response.json())
        .then((user) => {
          // Lấy danh sách công việc từ user
          const currentJobs = user.length > 0 ? user[0].jobs : [];
          // Thêm công việc mới vào danh sách
          const updatedJobs = [...currentJobs, newjob];
          dataJob.push(newjob);
          // Gửi yêu cầu PUT để cập nhật danh sách công việc mới lên server
          fetch(`${url}/${user[0].id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ jobs: updatedJobs, name: name })
          })
            .then(() => {
              setJob("");
            })
            .catch((error) =>
              console.error("Lỗi khi cập nhật công việc mới:", error)
            );
        })
        .catch((error) =>
          console.error("Lỗi khi lấy danh sách công việc hiện tại:", error)
        );
    }
  }

  function editJob() {
    const indexToUpdate = dataJob.indexOf(idJob);
    if (newjob.trim() === "") {
      alert("Không được để trống công việc");
    } else {
      // Gửi yêu cầu GET để lấy danh sách công việc hiện tại của name
      fetch(`${url}/?name=${encodeURIComponent(name)}`)
        .then((response) => response.json())
        .then((user) => {
          // sửa
          dataJob[indexToUpdate] = newjob;
          // Gửi yêu cầu PUT để cập nhật danh sách công việc mới lên server
          fetch(`${url}/${user[0].id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ jobs: dataJob, name: name })
          })
            .then(() => {
              setJob("");
            })
            .catch((error) =>
              console.error("Lỗi khi cập nhật công việc mới:", error)
            );
        });
    }
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ flex: 2, flexDirection: "row-reverse" }}>
        {/* Title Left */}
        <TouchableOpacity
          style={{}}
          onPress={() => {
            navigation.navigate("API_Screen_02", {
              name: name,
              dataJob: dataJob
            });
          }}
        >
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
              Hi {name}
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
            value={newjob}
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
            if (idJob.trim() == "") {
              addJob();
            } else {
              editJob();
            }
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            FINISH {"->"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6, justifyContent: "center" }}>
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
