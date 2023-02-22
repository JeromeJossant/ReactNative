import axios from 'axios';
import {useState} from 'react';

export const login = async (data) => {
    try {
        const res = await axios.post(
            'http://10.5.16.20:4500/students/login', data)
        return res.data;
    } catch (err) {
        console.error(err);
        return err
    }
};
