import { StyleSheet, Text, View, Pressable } from 'react-native'
import { color } from '../Global/colors'
import {MaterialIcons} from "@expo/vector-icons";
import { deleteAllSession } from '../database/index'
import { useSelector,useDispatch } from 'react-redux'
import { clearUser } from '../Features/authSlice'

const Header = ({title = "Producto"}) => {
  const dispatch = useDispatch()
  const localId = useSelector(state => state.auth.value.localId)
  const onLogout = () =>{
    deleteAllSession().then(result => console.log(result))
    dispatch(clearUser())
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {localId && <Pressable onPress={onLogout} style={styles.logoutIcon}>
                      <MaterialIcons name='logout' size={30} color="black"/>
                  </Pressable>
      }
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
    container:{
      backgroundColor:color.carbon,
        width:"100%",
        height:100,
        justifyContent:"center",
        alignItems:"center"
    },
    containerLandscape:{
      backgroundColor:color.carbon,
      width:"100%",
      height:70,
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
        fontSize:20,
        color: color.negro,
        margin: 20,
        fontFamily: "Cinzel"
    }
})