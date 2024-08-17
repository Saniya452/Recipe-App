import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import Input from "../../Components/Input";
import Title from "../../Components/Title";
import Categories from "../../Components/Categories";
import RecipesCard from "../../Components/RecipesCard";
import Card from "../../Components/Card";
import { HealthyRecipesContext, RecipesContext } from "../../../App";

const Home = ({ navigation }) => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const { recipes } = useContext(RecipesContext);
  const { healthyRecipes } = useContext(HealthyRecipesContext);

  useEffect(() => {
    const tagsList = [];

    recipes?.forEach((recipe) => {
      recipe?.tags?.forEach((tag) => {
        if (!tagsList?.includes(tag?.name)) {
          tagsList?.push(tag?.name);
        }
      });
    });
    setTags(tagsList);
  }, [recipes]);

  useEffect(() => {
    if (selectedTag) {
      const filteredItems = recipes?.filter((rec) => {
        const tag = rec?.tags?.find((t) => t?.name === selectedTag);
        return !!tag;
      });
      setFilteredRecipes(filteredItems);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [selectedTag, recipes]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input pressable onPress={() => navigation.navigate("Search")} />

        <Title text="Featured Recipes" />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: -20 }}
          horizontal
          data={healthyRecipes}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item, index }) => (
            <RecipesCard
              style={index === 0 ? { marginLeft: 24 } : {}}
              onPress={() => navigation.navigate("RecipeDetails", { item })}
              title={item?.name}
              time={item?.total_time_minutes}
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
        <Categories
          categories={tags}
          selectedCategory={selectedTag}
          onCategoryPress={setSelectedTag}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={filteredRecipes}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item, index }) => (
            <Card
              title={item?.name}
              onPress={() => navigation.navigate("RecipeDetails", { item })}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
