/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {style} from './styles/global';
import {useState, useEffect} from 'react';
import type {Node} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const jsonData = await response.json();
      setData(jsonData.value);
    } catch (err) {
      console.error(err);
    }
  };

  //affichage d'une fact au lancement
  useEffect(() => {
    fetchJoke();
  }, []);
  //affichage d'une fact lors de l'appui sur le bouton
  const actionButton = () => {
    fetchJoke();
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={actionButton}>
          <Text style={style.text}>Click me</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{data}</Text>
      </View>
    </>
  );
};
/*  useEffect(() => {
    console.log('useEffect');
  }, []);
  const [count, setCount] = useState(0);
  const onPressHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <View>
        <Text style={style.text}>hello world</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPressHandler}>
          <Text>click me</Text>
          <Text>{count}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};*/

export default App;
