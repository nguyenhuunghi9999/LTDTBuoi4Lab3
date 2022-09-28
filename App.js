
import { NavigationContainer } from '@react-navigation/native';
import OrderScreen from './screens/OrderScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='OrderScreen' component={OrderScreen} />
      </Stack.Navigator>
   </NavigationContainer>
    
  );
}

