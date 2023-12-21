import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 220,
    borderRadius: 20,
    backgroundColor: 'black',
    marginVertical: 7,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'capitalize'
  },

  img: {
    width: 200,
    height: 200,
  }
})

export default styles