/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//  Stack Navigation

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// function LoginScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Login Screen</Text>

//       <Button
//         title="Go to Signup"
//         onPress={() => navigation.navigate('Signup')}
//       />
//     </View>
//   );
// }

// function SignupScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Signup Screen</Text>

//       <Button title="Back to Login" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

//  Stack Navigation
// const AppRoutes = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="Login"
//     >
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// };

// Drawer navigation

//  Drawer navigation

// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// const useDrawerToggle = navigation => {
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => null,
//       headerRight: () => (
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           {/* <Text style={{ fontSize: 22, marginLeft: 15 }}>☰</Text>
//            */}
//           <Text style={{ fontSize: 22, marginRight: 15 }}>☰</Text>
//         </TouchableOpacity>
//       ),
//     });
//   }, [navigation]);
// };

// function HomeScreen({ navigation }) {
//   useDrawerToggle(navigation);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   useDrawerToggle(navigation);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Profile Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// const AppRoutes = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerPosition: 'right',
//         //  drawerPosition: 'left',// By Default FGeature
//         headerTitle: '', // remove title
//         headerShadowVisible: false, // remove bottom line
//         headerStyle: {
//           backgroundColor: 'transparent', // optional
//         },
//       }}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: true }}
//       />
//       <Drawer.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ headerShown: true }}
//       />
//     </Drawer.Navigator>
//   );
// };

//  Bottom Navigation

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTabs = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const AppRoutes = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderRadius: 20,
          margin: 5,
          height: 70,
          borderWidth: 3,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="home" size={size} color={color} />
        //   ),
        // }}
      />
      <BottomTabs.Screen
        name="About"
        component={AboutScreen}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="information-circle" size={size} color={color} />
        //   ),
        // }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="person" size={size} color={color} />
        //   ),
        // }}
      />
    </BottomTabs.Navigator>
  );
};

export default AppRoutes;
