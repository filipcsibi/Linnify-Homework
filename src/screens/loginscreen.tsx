import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MyLogin} from '../components/easyLogin';
import {forwardRef, useImperativeHandle, useRef, useState} from 'react';
export interface LoginFormRef {
  getData: () => {email: string; password: string};
  setData: (val: string, val2: string) => void;
}
export const Abc = () => {
  const loginRef = useRef<LoginFormRef>(null);
  const onPress = () => {
    loginRef.current?.setData('red', 'bbb');
  };
  return (
    <View style={{flex: 1}}>
      <MyLogin onPress={() => console.log('asd')} ref={loginRef}></MyLogin>
      <View style={styles.a}>
        <Pressable onPress={onPress}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  a: {
    backgroundColor: '#5BD547',
    width: '30%',
    height: '12%',
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '55%',
  },
});
