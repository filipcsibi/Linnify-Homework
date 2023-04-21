import {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDebounce} from '../hooks/use-debounce.hook';
import {isNetworkOnline} from '../hooks/use-network-status.hook';

export const MySearchBar = () => {
  const [state, setState] = useState<string>('');

  const search = useDebounce(state, 1000);
  useEffect(() => {
    console.log(search);
  }, [search]);

  const ceva = isNetworkOnline();
  console.log('asd', ceva);
  return (
    <View style={styles.main}>
      <View style={styles.a}>
        <TextInput
          style={styles.b}
          placeholder="Search"
          onChangeText={setState}>
          {state}
        </TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  a: {
    backgroundColor: 'white',
    width: '90%',
    height: '40%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  b: {
    width: '90%',
    height: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
});
