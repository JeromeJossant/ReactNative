import {Text, TouchableOpacity, View} from 'react-native';
import {style} from '../styles/global';
import {useEffect, useState} from 'react';

const Session = () => {
  const [data, setData] = useState([]);

  const fetchFact = async () => {
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
    fetchFact();
  }, []);
  //affichage d'une fact lors de l'appui sur le bouton
  const actionButton = () => {
    fetchFact();
  };

  return (
    <>
      <View>
        <Text style={style.data}>{data}</Text>
      </View>
      <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={actionButton}>
          <Text style={style.text}>New fact</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Session;