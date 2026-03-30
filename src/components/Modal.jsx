import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Modal } from 'react-native';
import { useState } from 'react';

const ModalComponent = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const handleOpenModal = () => {
    setmodalVisible(!modalVisible);
  };
  return (
    <View>
      {/* <Modal visible={modalVisible}>
        <Text>Hello World !</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={handleOpenModal}>
            Close
          </Text>
        </TouchableOpacity>
      </Modal> */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.title}>Hello World !</Text>

            <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text} onPress={handleOpenModal}>
          Open Modal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalComponent;

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

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // dim background
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '75%', // small popup (not full screen)
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 8,
  },

  title: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: '500',
  },

  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
