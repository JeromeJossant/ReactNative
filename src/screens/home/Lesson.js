import {View, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {getCours} from '../../services/Lessons';

const Lesson = ({navigation}) => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getCours();
      console.log(res);
        setLessons(res);
    };
    getData();
  }, []);
  return (
            <>
                <View>
                    <Text>Vos cours</Text>
                    <View>
                        {lessons.map(lesson => <Text key={lesson._id}> {lesson.label} {lesson.startDate} </Text>)}
                    </View>
                </View>
            </>
        )
};

export default Lesson;
