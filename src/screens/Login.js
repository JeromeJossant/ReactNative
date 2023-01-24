import {useState} from 'react';
import {Button, TextInput, View} from 'react-native';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const onChangeHanlder = event => {
    const {name, value} = event.target;
    setLogin({...login, [name]: value});
  };

  const onClickHandler = () => {
    const res = fetch('', {
      method: 'POST',
      body: JSON.stringify(login),
      credentials: 'include',
    });
  };

  return (
    <>
      <View>
        <TextInput
          name="email"
          placeholder="Email"
          value={login.email}
          onChangeText={onChangeHanlder}
        />
        <TextInput
          name="password"
          placeholder="Password"
            value={login.password}
            onChangeText={onChangeHanlder}
          />
          <Button title="Login" onPress={onClickHandler} />
        </View>
      </>
  );
};

export default Login;
