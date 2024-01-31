import { axiosJSON } from '@services/axios';

class AuthService {
  // metodo para registrar new user
  async signup(body) {
    const response = await axiosJSON.post('/users/', body); // OJO este puede cambiar cuando se integre con el back
    return response;
  }
}

export const authService = new AuthService();
