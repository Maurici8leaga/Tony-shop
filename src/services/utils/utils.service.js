import { addUser } from '@redux-toolkit/reducers/user/user.reducer';

export class UtilsService {
  // este es un metodo para despachar al user al login y signup
  static dispatchUser(result, dispatch, setUser) {
    dispatch(
      addUser({
        token:
          'eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJwYXNzd29yZCI6ImJlc3RQYXNzdzByZCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.uSjQL3kcCaX4E5sNsJroVnKHwpZ4fH1Q_SQZG08xdjA',
        profile: result // OJO este va cambiar cuando se integre con el back
      })
    );
    setUser(result); // OJO result.data va cambiar cuando se integre con el back
  }

  // Funcion para buscar user en FAKEDB ES TEMPORAL HASTA INTEGRAR EL BACKEND
  static findUserInDB(dataDB, user) {
    // dataDB debe ser la data existente que este en el fake DB
    //  user debe ser el usuario a buscar a ver si existe
    const value = dataDB.find((item) => {
      return item.email === user;
    });

    return value;
  }
}