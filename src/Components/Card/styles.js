import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: 'rgba(217,217,217,0.5)',
    padding: 10,
    width: width * 0.4,
    marginVertical: 30,
    marginTop: 60,
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    color: "#484848",
    fontWeight: "bold",
    textAlign: 'center',
    marginVertical: 16,
  },
  label: {
    color: "grey",
    fontSize: 11,
    //marginTop: 8,
    marginBottom: 4,
  },
  value: {
    color: "grey",
    fontSize: 11,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -60,
    alignSelf: 'center',
  },
});

export default styles;
