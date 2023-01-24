import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Chuk Norris Facts"
        onPress={() => navigation.navigate('Chuck')}
      />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
export default Home;
