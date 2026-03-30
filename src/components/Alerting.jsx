import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import React from 'react';

const Alerting = () => {
  //   const createTwoButtonAlert = () =>
  //     Alert.alert('Alert Title', 'My Alert Msg', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       { text: 'OK', onPress: () => console.log('OK Pressed') },
  //       { text: 'Why Okk ', onPress: () => console.log('OK Pressed') },
  //     ]);
  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  return (
    <View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text} onPress={createThreeButtonAlert}>
          Alert
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Alerting;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#4F46E5', // modern indigo
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
