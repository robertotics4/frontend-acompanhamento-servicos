import axios from 'axios';

console.log(process.env.REACT_APP_API_PROTOCOLO_URL);

const apiConsultaProtocolo = axios.create({
  baseURL: process.env.REACT_APP_API_PROTOCOLO_URL,
});

export { apiConsultaProtocolo };
