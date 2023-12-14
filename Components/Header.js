import { StyleSheet, Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const Header = ({ title = "Producto" }) => {

  return (
    <LinearGradient style={styles.container} colors={['rgba(0,0,0,0.8)', 'transparent']}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient >
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: 10,
  },
})