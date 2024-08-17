import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color:  "#129575",
    fontWeight: 'bold',
    padding:8,
    paddingHorizontal: 12,
    textTransform: 'capitalize'
    
  },
  selecteditem:{
    color: "white",

  },
  itemContainer:{
    marginBottom: 18,
    marginRight: 8,

  },
  selecteditemContainer:{
    backgroundColor:"#129575",
    borderRadius: 10,

  }
});

export default styles;
