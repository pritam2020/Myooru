/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native';

function LaunchScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{fontSize: 60}}>MyOoru</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View style={{paddingBottom: 30}}>
          <Button
            title="       End User       "
            onPress={() => navigation.navigate('EndUser')}
          />
        </View>
        <View>
          <Button
            title="        Retailer        "
            onPress={() => navigation.navigate('Retailer')}
          />
        </View>
      </View>
    </View>
  );
}

export default LaunchScreen;
