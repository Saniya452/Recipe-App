import { StyleSheet } from "react-native";
// import colors from  "../Constants/colors";

const styles = StyleSheet.create({
  container: {
   marginHorizontal: 24,
   flex: 1,
   marginBottom: 16
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12
  },
  row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(217,217,217,0.5)',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal:12,
    marginVertical: 4,
  },
  key:{
    fontSize: 16,
    color: 'black',
    textTransform: 'capitalize'
  },
  value:{
    fontSize: 12,
    color: 'grey'
  },
  instructionsRow:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  index:{
    fontSize: 20,
    marginRight: 16,
    color: '#797979',
  },
  instructionsText:{
    fontSize: 14,
    color: 'black',
    flex: 1
  }
});

export default styles;
