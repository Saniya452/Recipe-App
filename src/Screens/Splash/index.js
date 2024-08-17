import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import Button from "../../Components/Button";

const Splash = ({ navigation}) => {  
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/splash1.png")}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}/>
        <Text style={styles.title}>100K+ Premium Recipe </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.bigtitle}>Get</Text>
        <Text style={styles.bigtitle}>Cooking </Text>
        <Text style={styles.subtitle}>Simple way to find Tasty Recipes</Text>
        <Button onPress={() => {navigation.navigate('Home')}} style={styles.button}>Start Cooking</Button>
      </View>
    </ImageBackground>
  );
};
export default React.memo(Splash);
//{width: '100%', height: '100%'}
