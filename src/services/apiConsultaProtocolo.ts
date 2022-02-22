import axios from 'axios';

const apiConsultaProtocolo = axios.create({
  baseURL: process.env.REACT_APP_API_PROTOCOLO_URL,
});

export { apiConsultaProtocolo };
