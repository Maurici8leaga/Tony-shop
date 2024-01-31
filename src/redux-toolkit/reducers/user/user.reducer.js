import { createSlice } from '@reduxjs/toolkit';
// createSlice permite definir las acciones disponibles para interacturar con los datos del estado inicial de un reducer particular

// con REDUX-TOOLKIT los actions van ahora aqui adentro de los Slices

// estos actions se repetiran por los modelos que tengas user, carrito etc. En este caso es referente  al user

// de esta forma se declara el estado inicial de  las  propiedades que tendra este reducer
const initialState = {
  token: '',
  profile: null
};

const userSlice = createSlice({
  name: 'user', // nombre del reducer que se reconocera entre los otros que existan
  initialState,
  reducers: {
    // aqui ira la logica para modificar el state del objeto que este en el store
    addUser: (state, action) => {
      console.log(action, 'que es');
      const { token, profile } = action.payload;
      state.token = token;
      state.profile = profile;
    }
  }
});

// para exportar las actions
export const { addUser } = userSlice.actions; // OJO importante colocar actions
// para exportar el reducer
export default userSlice.reducer;
