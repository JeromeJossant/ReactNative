import axios from 'axios';

export const getLessons = async () => {
    try {
        const res = await axios.get('http://10.7.17.64:4500/lessons/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
