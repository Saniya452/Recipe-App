import React from "react";
import { FlatList, Text,TouchableOpacity, } from "react-native";
import styles from "./style";

const Categories = ({ categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={ categories }
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator ={false}
      style={{ marginHorizontal: -24 }}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item;
        const displayName = item?.replace('_',' ');
        
        return (
          <TouchableOpacity 
            onPress={() => onCategoryPress (item)}
            style={[styles.itemContainer,selected ? styles.selecteditemContainer : {}, index === 0 ? { marginLeft: 24 } : {}]}>

            <Text style={[styles.item, selected ? styles.selecteditem : {}]}>{displayName}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
