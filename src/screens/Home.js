import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return (
    <View style={styles.container}>
      <Image source={require("../../src/img/1.png")} style={styles.img} />

      <Text style={styles.title}>Maxx Scooter</Text>

      <Text style={styles.detail}>
        With and updated motor, and integrated anti-theft touch the mass
        scooters are custom-turn for the ultimate riding experience.
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Details")}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100px",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    width: "95%",
    objectFit: "scale-down",
    margin: "auto",
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    fontFamily: "Montserrat_700Bold",
    fontSize: 25,
    textAlign: "center",
  },
  detail: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: "20",
    lineHeight: 20,
    marginTop: 5,
    padding: 40,
  },
  btn: {
    marginTop: 50,
    backgroundColor: "#E2443B",
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    color: "#FFF",
  }
});
