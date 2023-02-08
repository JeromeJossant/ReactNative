import axios from 'axios';
import {useState} from 'react';

export const handleSubmit = async (data) => {
    try {
        const res = await axios.post(
            'http://10.7.18.186:4500/students/login', data)
        return res.data;
    } catch (err) {
        console.error(err);
        return err
    }
};
