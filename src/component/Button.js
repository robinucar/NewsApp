import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { StyleSheet,View, Text, TouchableOpacity, Dimensions} from 'react-native';

const Button = () => {
  return <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Log In</Text>
  </TouchableOpacity>;
};

export {Button};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#82ada9',
        padding: 20,
        alignSelf: 'center',
        borderRadius: 10,
        width: Dimensions.get('window').width / 2,
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        
    }
})

