/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements/dist/card/Card';
import database from '@react-native-firebase/database';
import {ScrollView} from 'react-native-gesture-handler';

function RetailerScreen() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const arr = [];
    const onValueChange = database()
      .ref('/users/')
      .on('value', snapshot => {
        snapshot.forEach(childSnapshot => arr.push(childSnapshot.val()));
        setdata(arr);
        //console.log(data);
      });
    return () => database().ref('/users/').off('value', onValueChange);
  }, []);
  return (
    <View>
      <View
        style={{
          margin: 6,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{fontSize: 25}}> Item</Text>
        <Text style={{fontSize: 25}}>Quantity</Text>
      </View>

      <ScrollView>
        {data.map(item => (
          <View
            key={item.itm}
            style={{
              margin: 6,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 25,
            }}>
            <Text style={{fontSize: 20}}>{item.itm}</Text>
            <Text style={{fontSize: 20}}>{item.quty}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default RetailerScreen;
