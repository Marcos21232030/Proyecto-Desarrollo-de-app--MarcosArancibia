import { StyleSheet, Text, View ,useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import { color } from '../Global/colors'


const Header = ({title = "Producto"}) => {
  const {width,height} = useWindowDimensions()
  const [landscape , setLandscape] = useState(false)

  useEffect(()=>{
    if(width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
    }
  },[width,height])


  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
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