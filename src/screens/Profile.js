import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const me = async () => {
            try {
                const response = await axios.get('http://10.7.18.186:4500/students/me');
                setUserData(response.data);
            } catch (e) {
                setError('Error fetching user data.');
            }
        };

        me();
    }, []);

    return (
        <View>
            {error ? (
                <Text>{error}</Text>
            ) : (
                <>
                    <Text>Prénom: {userData.firstname}</Text>
                    <Text>Nom: {userData.lastname}</Text>
                </>
            )}
        </View>
    );
};

export default Profile;
