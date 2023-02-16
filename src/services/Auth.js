import axios from 'axios';
import {useState} from 'react';

export const login = async (data) => {
    try {
        const res = await axios.post(
            'http://192.168.1.33:4500/students/login', data)
        return res.data;
    } catch (err) {
        console.error(err);
        return err
    }
};
