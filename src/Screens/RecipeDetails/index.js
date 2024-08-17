import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Title from "../../Components/Title";
import { ScrollView } from "react-native-gesture-handler";

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {}; 
  console.log("item?.instructions:>>", item?.instructions);
  const instructions = item?.instructions || {};
  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys( nutrition || {} ) ;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image style={styles.image} source={{uri: item?.thumbnail_url}} />
      <Title style={{marginBottom: 26,}} text={item?.name}/>
      {nutritionKeys?.map(keys => (
        <View key={keys} style={styles.row}>
          <Text style={styles.key}>{keys}</Text>
          <Text style={styles.value}>{nutrition[keys]}</Text>
        </View>
      ))}
            <Title style={{marginTop: 26, marginBottom: 16}} text="Instructions"/>
            {instructions?.map((instructions, index) => (
        <View key={instructions?.id} style={styles.instructionsRow}>
          <Text style={styles.index}>{index + 1}</Text>
          <Text style={styles.instructionsText}>{instructions?.display_text}</Text>
        </View>
        ))}
         {!instructions?.length ? (
             <Text style={styles.value}>No instructions Found.</Text>
         ) : null}

      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(RecipeDetails);
