import axios from 'axios';

// DATO las variables de entorno de react tienes que comenzar con "REACT_APP"
const APP_ENVIROMENT = process.env.REACT_APP_ENV;

export let BASE_ENDPOINT = '';

// metodo para cambiar el URL del server dinamicamente segun el entorno
if (APP_ENVIROMENT === 'development') {
  BASE_ENDPOINT = 'http://localhost:3500'; // el back con json-server esta en el 3500
} else if (APP_ENVIROMENT === 'production') {
  BASE_ENDPOINT = 'por ahora en veremos';
}

export const SERVER_URL = `${BASE_ENDPOINT}`;

// instancia desacoplada de axios con sus configuraciones, OJO para solicitudes con headers JSON
export const axiosJSON = axios.create({
  // de esta forma abstraida no se tiene que repetir esto constantemente para cada request
  baseURL: SERVER_URL,
  // para actualizar el document se debe colocar este header de tipo "application/json"
  headers: {
    'Content-Type': 'text/plain', // para enviar solo texto
    Accept: '*/*'
  }
  // headers: {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json'
  // },
  // withCredentials: true
});
