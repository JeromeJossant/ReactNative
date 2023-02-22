import axios from 'axios';
export const getMeApi = async () => {
    try {
        const res = await axios.get('http://10.5.16.20:4500/students/me');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
