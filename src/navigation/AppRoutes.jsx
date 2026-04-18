/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>

      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}

function SignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Screen</Text>

      <Button title="Back to Login" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

//  Stack Navigation
const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

// const AppRoutes = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Login" component={LoginScreen} />
//       <Drawer.Screen name="Signup" component={SignupScreen} />
//     </Drawer.Navigator>
//   );
// };

export default AppRoutes;
