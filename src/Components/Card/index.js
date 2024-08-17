import React from "react";
import { Image, Text } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({ title, style, image, servings, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>   
        <Image style={styles.image} source={{uri: image}}/>
        <Text numberOfLines={3} style={styles.title}>{title}</Text>
        {servings? (
          <>
          <Text style={styles.label}>servings</Text>
          <Text style={styles.value}>{servings}</Text>
          </>
          
        ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Card);