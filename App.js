import { StatusBar } from 'react-native';
import { color } from './Global/colors';
import { useFonts } from "expo-font"
import { Provider } from 'react-redux'
import { store } from './App/store';
import MainNavigator from './Navigation/MainNavigator';
import { init } from './database/index'

init()
.then(() => console.log("DB Initialized"))
.catch(err => console.log(err))


const App = () => {


  const [fontLoaded] = useFonts({
    Cinzel: require("./assets/Fonts/Cinzel/static/Cinzel-SemiBold.ttf"),
    Raleway: require("./assets/Fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf")
  })

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={color.carbon} />
      <Provider store={store}>
        <MainNavigator />
      </Provider>

    </>
  )
}

export default App;