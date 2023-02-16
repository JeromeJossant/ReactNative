import {Button, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('Lesson');
    }


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Chuk Norris Facts"
        onPress={() => navigation.navigate('Chuck')}
      />
        <TouchableOpacity onPress={onPressHandler}>
            <Text>Goto Chuck Page</Text>
        </TouchableOpacity>
    </View>
  );
};
export default Home;
