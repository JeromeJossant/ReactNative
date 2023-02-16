import axios from 'axios';

export const getSessions = async () => {
  try {
    const res = await axios.get('http:192.168.1.33//:4500/sessions/');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
