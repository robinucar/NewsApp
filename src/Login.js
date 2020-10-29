import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Button, Input } from './component'

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#b2dfdb'}}>
      <View>
        <Image
          source={require('./assests/login.png')}
          style={styles.logoStyle}
        />
       <Input holder='Type your e-mail please...'/>
       <Input holder='Enter your password please...'/>

       <Button />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.40,
    tintColor: 'grey' 
  },
});
