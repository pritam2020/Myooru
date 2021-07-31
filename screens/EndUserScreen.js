/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native';
import {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';

function EndUserScreen({navigation}) {
  const [item, setitem] = useState('');
  const [quantity, setquantity] = useState('');

  const submit = event => {
    const item1 = item;
    const item2 = quantity;
    console.log(item1);
    console.log(item2);
    const reference = database().ref('/users').push();
    reference.set({itm: item1, quty: item2}).then(event.Button.c);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        onChangeText={text => setitem(text)}
        placeholder="write the item"
        placeholderTextColor="#B2B1B9"
        style={{
          color: '#161616',
          width: '80%',
          height: 40,
          margin: 12,
          borderWidth: 1,
        }}
      />
      <TextInput
        onChangeText={text => setquantity(text)}
        placeholder="quantity"
        keyboardType="numeric"
        maxLength={10}
        style={{
          color: '#161616',
          width: '80%',
          height: 40,
          margin: 12,
          borderWidth: 1,
        }}
      />
      <Button title="Submit" onPress={event => submit(event)} />
    </View>
  );
}

export default EndUserScreen;
