import { StyleSheet } from "react-native";
// import colors from  "../Constants/colors";

const styles = StyleSheet.create({
  container: {
   paddingHorizontal: 18,
    paddingVertical: 60
  },
  background: {
    width: "101%",
    height: "100%",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    fontWeight: 'bold',
    marginTop: 14
  },
  
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  bigtitle: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FFFFFF",
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40
  }
});

export default styles;
