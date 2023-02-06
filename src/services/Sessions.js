import axios from 'axios';

export const getSessions = async () => {
  try {
    const res = await axios.get('http://:4500/sessions/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
