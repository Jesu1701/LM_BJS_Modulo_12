import Axios from 'axios';

//const url = `${procces.env.BASE_API_URL}/account-list`;
// Esto es igual que lo de arriba, pero así lo entiendo mejor
const url = procces.env.BASE_API_URL + '/account-list';

export const getAccountList = () => Axios.get(url).then(response => {
  return response.data;
});
