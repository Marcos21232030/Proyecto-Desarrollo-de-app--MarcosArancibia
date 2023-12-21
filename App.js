import {StatusBar } from 'react-native-web';
import { color } from './Global/colors';
import { useFonts } from "expo-font"
import Navigator from './Navigation/Navigator';





const App = () => {


  const [fontLoaded] = useFonts({
    Cinzel: require("./assets/Fonts/Cinzel/static/Cinzel-SemiBold.ttf"),
    Raleway: require("./assets/Fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf")
  })

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar
        backgroundColor={color.carbon}
      />
      <Navigator/>
    </>
  );
};

export default App;

