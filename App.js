import { StyleSheet, View} from 'react-native'; 
import Home from './Screens/Home';
import ItemListCategories from './Screens/ItemListCategories';
import { useState } from 'react';
const App = () => {
  const [categorySelected,setCategorySelected] = useState("")

  return (
    <View style={styles.container}>
      {categorySelected ?
      <ItemListCategories category = {categorySelected} />  
      : 
      <Home setCategorySelected={setCategorySelected} />
    }
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
