import axios from 'axios';

export const getLessons = async () => {
    try {
        const res = await axios.get('http://10.5.16.20:4500/lessons/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
export const getCours = async () => {
    try {
        const res = await axios.get('http://10.5.16.20:4500/cours/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
