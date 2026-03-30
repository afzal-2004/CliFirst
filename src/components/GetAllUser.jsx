import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getUsers } from '../api/userApi';
import { useState, useEffect } from 'react';

const GetAllUser = () => {
  const [UserData, setUserData] = useState([]);
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

  return (
    <View>
      <Text style={styles.titleText}>GetAllUser</Text>

      {UserData.map(data => (
        <View key={data?.id} style={styles.card}>
          <Text style={styles.userId}>ID: {data?.id}</Text>
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={styles.info}>📧 {data?.email}</Text>
          <Text style={styles.info}>📱 {data?.mobileNumber}</Text>
        </View>
      ))}
    </View>
  );
};

export default GetAllUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  userId: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },

  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
});
