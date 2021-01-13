import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/login`;

// Métodos básicos para apis
// get
// post
// put
// delete

export const isValidLogin = (login) => Axios.post(url, login).then(response => {
  return response.data;
});

