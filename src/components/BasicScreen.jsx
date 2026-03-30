/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import { useState } from 'react';

export const BasicScreen = () => {
  const date = new Date().getTime();
  const [text, setText] = useState('');

  const [Todo, setTodo] = useState([]);

  const RenderedFunction = ({ item, i }) => (
    <View>
      {/* <Text style={{ fontSize: 20, color: 'red' }}>{i}</Text> */}
      <Text
        style={{ fontSize: 20, color: 'red', marginLeft: 10, marginTop: 5 }}
      >
        {item.task}
      </Text>
    </View>
  );
  const OnAddTodo = () => {
    if (!text) {
      Alert.alert('Please write  Task First ');
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      task: text,
    };
    setTodo(prev => [...prev, newTodo]);
    setText('');
  };

  return (
    <View>
      <View style={styles.TodoList}>
        <TextInput
          style={styles.inputStyles}
          placeholder="Enter Your Name"
          value={text}
          onChangeText={value => setText(value)}
        />

        <TouchableOpacity>
          <Text style={styles.buttonUi} onPress={OnAddTodo}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Todo}
          renderItem={RenderedFunction}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TodoList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyles: {
    padding: 1,
    // margin: 3,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    width: '70%',
  },
  buttonUi: {
    backgroundColor: 'red',
    padding: 5,
    margin: 5,
    width: 100,
    // width: '50%',
    textAlign: 'center',
    color: 'white',
    fontSize: 19,
  },
});
