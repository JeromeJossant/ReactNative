import {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {handleSubmit} from '../services/Auth'
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const OnPressHandler = async (event) => {
    const res = await handleSubmit({
      email,
      password
    },
        navigation.navigate('Profile')
  )
  }
/*  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://10.7.18.186:4500/students/login',
        {
          email,
          password,
      });

      navigation.navigate('Profile');
    } catch (e) {
      setError(' ');
    }
  };*/

  return (
    <>
      <View>
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={OnPressHandler} />
        {error && <TextInput>{error}</TextInput>}
      </View>
    </>
  );
};

export default Login;
