import axios from 'axios';
import {useState} from 'react';

export const HandlerSubmit = async () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
    try {
      const response = await axios.post(
        'http://10.7.17.64:4500/students/login',
        {
          email,
          password,
        },
          console.log(email)
      );

      // Check the response for success or failure
      // Navigate to the next screen or show a success message
    } catch (e) {
      setError('Invalid credentials, please try again.');
    }
  };
