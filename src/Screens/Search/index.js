import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import Input from "../../Components/Input";
import { RecipesContext } from "../../../App";
import Card from "../../Components/Card";
import { ScrollView } from "react-native-gesture-handler";

const Search = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [keyword, setKeywords] = useState('');

  useEffect(() => {
    if (keyword?.length > 2) {
        const filteredItems = recipes?.filter(rec => rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase()))
        setFilteredRecipes(filteredItems);
    } else {
        setFilteredRecipes([])
    }
}, [keyword])
  

  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus onChangeText={setKeywords} value={keyword} />
      <FlatList
        data={filteredRecipes}
        style={{ flexGrow: 1}}
        numColumns={2}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item, index }) => (
          <Card
            title={item?.name}
            onPress={() => navigation.navigate("RecipeDetails", { item }) }
            servings={item?.num_servings}
            image={item?.thumbnail_url}
            rating={item?.user_ratings?.score}
            author={
              item?.credits?.length
                ? {
                    name: item?.credits[0]?.name,
                    image: item?.credits[0]?.image_url,
                  }
                : null
            }
          />
        )}
      />
    </SafeAreaView>
  );
};
export default React.memo(Search);
