import axios from 'axios';

export const getClasses = async () => {
    try {
        const res = await axios.get('http://10.7.16.31:4500/classes/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
export const getClasse = async () => {
    try {
        const res = await axios.get('http://10.7.16.31:4500/classes/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
