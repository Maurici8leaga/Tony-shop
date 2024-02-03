import { axiosJSON } from '@services/axios';

class AuthService {
  // metodo para registrar new user
  async signup(body) {
    const response = await axiosJSON.post('/users/', body); // OJO este puede cambiar cuando se integre con el back
    return response;
  }

  // metodo para iniciar sesion
  async signIn(body) {
    const response = await axiosJSON.get('/users'); // OJO este VA a cambiar cuando se integre con el back
    return response;
  }
}

export const authService = new AuthService();
