
import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import {getMeApi} from '../../services/Students'

const Profile = ({navigation}) => {
    const [students, setStudents] = useState([{}])
    useEffect(() => {
        const getMe = async () => {
            console.log('getMe')
            const res = await getMeApi()
            console.log(res)
            setStudents(res)
        }

        getMe()
    }, [])

    const onPressHandler = () => {
        navigation.navigate('Chuck');
    }

    return (
        <>
        <View>
            <Text>Profile screen</Text>
            <View>
                {students.map(student => <Text key={student._id}> {student.firstname} </Text>)}
            </View>
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Goto Chuck Page</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Profile
