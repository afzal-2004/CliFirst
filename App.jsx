/* eslint-disable react-native/no-inline-styles */
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
// import { BasicScreen } from './components/BasicScreen';
// import { Login } from './components/AuthScreens';
// import { useState } from 'react';
// import SectionListScreen from './components/SectionListScreen';
// import ModalComponent from './components/Modal';
// import Alerting from './components/Alerting';
// import GetAllUser from './src/components/GetAllUser';
import AppRoutes from './src/navigation/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  // const [name, setname] = useState('Afzal');

  // const Printname = () => {
  //   if (name == 'Afzal') {
  //     setname('khan');
  //   } else {
  //     setname('Afzal');
  //   }
  // };

  return (
    <>
      <SafeAreaView style={{ width: '100%', flex: 1 }}>
        {/* <Text style={styles.justTest}>{name} </Text> */}
        {/* <TouchableOpacity style={styles.buttonDesign}>
          <Text
            onPress={() => Printname()}
            style={{ fontSize: 20, padding: 2, width: '50%' }}
          >
            Press me
          </Text>
        </TouchableOpacity> */}
        {/* <BasicScreen /> */}
        {/* <SectionListScreen /> */}
        {/* <Login /> */}
        {/* <ModalComponent /> */}
        {/* <Alerting /> */}
        {/* <GetAllUser /> */}
        {/* </Toast> */}

        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </SafeAreaView>
      <Toast />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  justTest: {
    color: '#161515',
    padding: '10',
  },
  buttonDesign: {
    backgroundColor: '#6350e1',
    width: '50%',
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
