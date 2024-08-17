import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet } from "react-native";
import Splash from "./src/Screens/Splash";
import Home from './src/Screens/Home';
import Search from "./src/Screens/Search";
import RecipeDetails from "./src/Screens/RecipeDetails";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Button from "./src/Components/Button";
import React, { useEffect, useState } from "react";
import { getRecipesList } from "./src/http";


const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require('./assets/back.png')} />
    </Pressable>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async() => {
    const rec = await handleRecipesFetch(null, '30')
     setRecipes(rec)
    const healthyRec = await handleRecipesFetch('healthy', '5')
    setHealthyRecipes(healthyRec)
    })()
    

  }, [])
  const handleRecipesFetch = async (tags, size) => {
    try{
        const recipes = await  getRecipesList(tags, size)
        // console.log('Fetched Recipes:', JSON.stringify(recipes?.data?.results, null, 2)); // Log the entire response
        return recipes?.data?.results;
    } catch (e) {
      console.log('error fatching recipes: >>', e);
      
    }
  }
  return (
  <HealthyRecipesContext.Provider value={{ healthyRecipes, setHealthyRecipes }}>    
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={theme}>
         <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerLeft: null, gestureEnabled: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerLeft: (props) => <BackButton {...props} /> }} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ headerLeft: (props) => <BackButton {...props} />, title: ""}} />
         </Stack.Navigator>
       </NavigationContainer>
    </RecipesContext.Provider>
  </HealthyRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 26,
    height: 26,
    margin: 16,
  },
});
