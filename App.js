import { StatusBar } from 'react-native';
import { useFonts } from "expo-font"
import { Provider } from 'react-redux'
import { store } from './App/store';
import MainNavigator from './Navigation/MainNavigator'






const App = () => {


  const [fontLoaded] = useFonts({
    Cinzel: require("./assets/Fonts/Cinzel/static/Cinzel-SemiBold.ttf"),
    Raleway: require("./assets/Fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf")
  })

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.green1}/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>

    </>
  )
}

export default App;