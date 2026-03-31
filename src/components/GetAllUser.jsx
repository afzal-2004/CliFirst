import { Text, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import React from 'react';
import { getUsers } from '../api/userApi';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { styles } from '../styles/User';

const GetAllUser = () => {
  const [UserData, setUserData] = useState([]);
  const [SelectedUser, setSelectedUser] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      console.log('This is My User Data ', res.data);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log('This is The Data Of My  Current Selected user ', SelectedUser);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titleText}>GetAllUser</Text>

        {UserData.map(data => (
          <View key={data?.id} style={styles.card}>
            <Text style={styles.userId}>ID: {data?.id}</Text>
            <Text style={styles.name}>{data?.name}</Text>
            <Text style={styles.info}>📧 {data?.email}</Text>
            <Text style={styles.info}>📱 {data?.mobileNumber}</Text>
            <View style={styles?.buttons}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedUser(data);
                  setShowModal(true);
                }}
              >
                <Text style={styles?.updateBtn}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.cancelBtn}>Delete </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Modal visible={ShowModal} transparent={true}>
        <View style={styles.modalOverlay}>
          <UpdateUserModal
            SelectedUser={SelectedUser}
            setShowModal={setShowModal}
          />
        </View>
      </Modal>
    </View>
  );
};

export default GetAllUser;

const UpdateUserModal = ({ SelectedUser, setShowModal }) => {
  const [UpdateValue, setUpdateValue] = useState({
    id: '',
    name: '',
    email: '',
    mobileNumber: '',
  });
  useEffect(() => {
    setUpdateValue(prev => ({
      ...prev,
      id: SelectedUser?.id,
    }));
  }, [SelectedUser]);
  const HandleChange = (feild, value) => {
    setUpdateValue(prev => ({
      ...prev,
      feild: value,
    }));
  };

  console.log('This is My User value Fopr Updation ', UpdateValue);
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Update User</Text>
      <TextInput
        value={SelectedUser?.email}
        name={'name'}
        style={styles.input}
        placeholderTextColor="#888"
        onChange={e => HandleChange('name', e.target.value)}
      />
      <TextInput
        value={SelectedUser?.name}
        name="email"
        style={styles.input}
        placeholderTextColor="#888"
        onChange={e => HandleChange('email', e.target.value)}
      />
      <TextInput
        value={SelectedUser?.mobileNumber}
        name="mobileNumber"
        style={styles.input}
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChange={e => HandleChange('mobileNumber', e.target.value)}
      />
      <View style={styles.UpdateButtons}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.updateBtn}>
          <Text styles={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
