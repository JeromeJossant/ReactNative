import axios from 'axios';

export const getClasses = async () => {
    try {
        const res = await axios.get('http://192.168.1.33:4500/classes/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
export const getClasse = async () => {
    try {
        const res = await axios.get('http://192.168.1.33:4500/classes/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
