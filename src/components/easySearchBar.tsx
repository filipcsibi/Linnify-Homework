import {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDebounce} from '../hooks/use-debounce.hook';
import {isNetworkOnline} from '../hooks/use-network-status.hook';
import {useSearch} from '../hooks/use-search.hook';
import {date} from './MovieList';

export const MySearchBar = () => {
  const [state, setState] = useState<string>('');

  // const debouncer = useDebounce(state, 400);
  // const searcher = useSearch('Oprhan: First Kill', date, state);

  // useEffect(() => {
  //   console.log(debouncer); //MERGE DOAR CAND DAU CONTROL + S
  //   console.log('----'); //MERGE DOAR CAND DAU CONTROL + S
  //   console.log(searcher);
  // }, [debouncer]);

  // useEffect(() => {
  //   console.log(debouncer);
  // }, [debouncer]);

  // const ceva = isNetworkOnline();
  // console.log('asd', ceva);

  return (
    <View style={styles.main}>
      <View style={styles.a}>
        <TextInput
          onChangeText={setState}
          style={styles.b}
          placeholder="Search"
          value={state}></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  a: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  b: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
});
