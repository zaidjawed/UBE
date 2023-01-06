import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Categories from './components/Categories';
import Ingredient from './components/Ingredient';
import Recipes from './components/Recipes';
import BackButton from './components/BackButton';
import SingleIngredient from './components/SingleIngredient';
import SearchInput from './components/SearchInput';

const Stack = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="Search" 
          component={Home} 
          options={({ navigation, route }) => ({
            headerLeft: () => <BackButton title="Home" navigation={navigation} />,
            headerTitle: () => <SearchInput />
          })} 
        />
        <Stack.Screen 
          name="Categories" 
          component={Categories}
          options={({ navigation, route }) => ({
            headerLeft: () => <BackButton title="Home" navigation={navigation} />
          })} 
        />
        <Stack.Screen 
          name="Ingredient" 
          component={Ingredient} 
          initialParams={{header: ""}}
          options={({ navigation, route }) => ({
            title: `Ingredient for ${route.params.header}`,
            headerLeft: () => <BackButton title="Back" navigation={navigation} />,
            drawerItemStyle: {display: "none"}
          })} 
        />
        <Stack.Screen 
          name="Recipes" 
          component={Recipes} 
          options={{ headerShown: false, drawerItemStyle: {display: "none"} }} 
        />
        <Stack.Screen 
          name="Single Ingredient" 
          component={SingleIngredient} 
          initialParams={{header: ""}}
          options={({ navigation, route }) => ({
            title: route.params.header,
            headerLeft: () => <BackButton title="Back" navigation={navigation} />,
            drawerItemStyle: {display: "none"}
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
