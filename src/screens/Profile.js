import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.7.17.64:4500/students/me');
                setUserData(response.data);
            } catch (e) {
                setError('Error fetching user data.');
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            {error ? (
                <Text>{error}</Text>
            ) : (
                <>
                    <Text>Name: {userData.firstname}</Text>
                    <Text>Email: {userData.lastname}</Text>
                </>
            )}
        </View>
    );
};

export default Profile;
