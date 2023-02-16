import axios from 'axios';

export const getLessons = async () => {
    try {
        const res = await axios.get('http://192.168.1.33:4500/lessons/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
