import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';
import React from 'react';
import { getUsers, deleteUser, updateUser, createUser } from '../api/userApi';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { styles } from '../styles/User';
import Toast from 'react-native-toast-message';

const GetAllUser = () => {
  const [UserData, setUserData] = useState([]);
  const [SelectedUser, setSelectedUser] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [isuserAdd, setisuserAdd] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();

      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const HandleDelete = async Id => {
    try {
      Alert.alert(
        'Deletion User ',
        'Are You Sure You Want To Delete This User',
        [
          {
            text: 'OK',
            onPress: async () => {
              const res = await deleteUser(Id);
              ToastAndroid.show('User deleted successfully', ToastAndroid.LONG);
              // Toast.show({
              //   type: 'success',
              //   text1: 'Success',
              //   text2: 'User deleted successfully',
              // });
              setUserData(prev => prev.filter(user => user.id !== Id));
            },
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titleText}>GetAllUser</Text>
        <TouchableOpacity
          style={{ marginVertical: 20 }}
          onPress={() => {
            setisuserAdd(true);
          }}
        >
          <Text style={styles?.AddBtn}>Add New user</Text>
        </TouchableOpacity>

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
                  setisuserAdd(false);
                }}
              >
                <Text style={styles?.updateBtn}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  HandleDelete(data?.id);
                }}
              >
                <Text style={styles.cancelBtn}>Delete </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Modal visible={ShowModal || isuserAdd} transparent={true}>
        <View style={styles.modalOverlay}>
          <UpdateUserModal
            SelectedUser={SelectedUser}
            setShowModal={setShowModal}
            fetchUsers={fetchUsers}
            isuserAdd={isuserAdd}
            setisuserAdd={setisuserAdd}
          />
        </View>
      </Modal>
    </View>
  );
};

export default GetAllUser;

const UpdateUserModal = ({
  SelectedUser,
  setShowModal,
  fetchUsers,
  isuserAdd,
  setisuserAdd,
}) => {
  const [UpdateValue, setUpdateValue] = useState({
    id: '',
    name: '',
    email: '',
    mobileNumber: '',
  });
  useEffect(() => {
    if (SelectedUser && !isuserAdd) {
      setUpdateValue({
        id: SelectedUser.id,
        name: SelectedUser.name,
        email: SelectedUser.email,
        mobileNumber: SelectedUser.mobileNumber,
      });
    }
  }, [SelectedUser, isuserAdd]);
  const HandleChange = (feild, value) => {
    setUpdateValue(prev => ({
      ...prev,
      [feild]: value,
    }));
  };
  const uniqueId = Date.now();
  const handleUpdateUser = async () => {
    const AddPayload = {
      ...UpdateValue,
      id: uniqueId,
    };

    console.log(
      'This is Add Payload I am Sending In backend Side ',
      AddPayload,
    );

    try {
      const res = !isuserAdd
        ? await updateUser(SelectedUser.id, UpdateValue)
        : await createUser(AddPayload);
      console.log('This is The Responce On Product Adding ', res);

      if (res.status == '200' || res.status == '201') {
        if (!isuserAdd) {
          ToastAndroid.show('User deleted successfully', ToastAndroid.LONG);
          setShowModal(false);
        } else {
          ToastAndroid.show('User Add successfully', ToastAndroid.LONG);
          setisuserAdd(false);
        }

        fetchUsers();
      }
    } catch (error) {
      ToastAndroid.error('Something Went Wrong');
    }
  };
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>
        {isuserAdd ? 'Add new user' : 'Update User'}
      </Text>
      <TextInput
        value={UpdateValue?.name}
        name="name"
        placeholder="XYZ"
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={text => HandleChange('name', text)}
      />
      <TextInput
        value={UpdateValue?.email}
        name="email"
        placeholder="xyz@gmail.com"
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={text => HandleChange('email', text)}
      />
      <TextInput
        value={UpdateValue?.mobileNumber}
        name="mobileNumber"
        style={styles.input}
        placeholder="1234567890"
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChangeText={text => HandleChange('mobileNumber', text)}
      />
      <View style={styles.UpdateButtons}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() =>
            isuserAdd ? setisuserAdd(false) : setShowModal(false)
          }
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.updateBtn}
          onPress={() => handleUpdateUser()}
        >
          <Text styles={styles.updateText}>{isuserAdd ? 'Add' : 'Update'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
