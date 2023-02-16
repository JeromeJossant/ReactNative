import {Text, TouchableOpacity, View} from 'react-native';
import {style} from '../styles/global';
import {useEffect, useState} from 'react';
import {getSessions} from '../services/Sessions';

const Session = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getSessions();
      console.log(res);
      setSessions(res);
    };
    getData();
  }, []);

  return (
    <>
      <View>
        <Text>Lesson</Text>
        <View>
          {sessions.map(session => <Text key={session._id}> {session.label} </Text>)}
        </View>
      </View>
    </>
  );
};

export default Session;
