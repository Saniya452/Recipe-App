import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 12,
    width: width * 0.7,
    marginBottom: 32,//15
    marginTop: 45,//40
    marginRight: 8, //8
   //paddingHorizontal:18,
    height: 100,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    // Android Shadow
    elevation: 10,
  },
  title: {
    fontSize: 14,
    flex: 1,
    color: "#484848",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8, //16
  },
  footerText: {
    color: "#A9A9A9",
    fontSize: 11,
  },
  authorImage: {
    width: 30,
    height: 30,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#A9A9A9'
  },
  timerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -20
  },
  timerIcon: {
    width: 17,
    height: 17,
    marginLeft: 165,
    marginRight: 6,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginTop: -50,
    marginLeft: 18,
  },
});

export default styles;
