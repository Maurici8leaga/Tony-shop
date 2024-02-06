// este es un custom HOOKs para el localStorage

const useLocalStorage = (key, type) => {
  // parametos:
  // key= al nombre del token
  // type= es el tipo de request que se vaya a necesitar dependiendo de la ocasion
  try {
    if (type === 'get') {
      // para pedir el token ya establecido en localStorage
      const getValue = JSON.parse(window.localStorage.getItem(key));
      // se debe parsear lo que se traiga del get
      return [getValue]; // OJO IMPORTANTE ES NECESARIO LOS [] ya que para la destructuracion se espera estos
    } else if (type === 'set') {
      const setValue = (newValue) => {
        // para establecer el token en localStorage
        window.localStorage.setItem(key, JSON.stringify(newValue)); // se debe convertir a formato JSON
      };

      return [setValue]; // OJO IMPORTANTE ES NECESARIO LOS [] ya que para la destructuracion se espera estos
    } else if (type === 'delete') {
      const deleteValue = () => {
        // para eliminar el token del localStorage
        window.localStorage.removeItem(key);
      };
      return [deleteValue]; // OJO IMPORTANTE ES NECESARIO LOS [] ya que para la destructuracion se espera estos
    }
  } catch (error) {
    console.log(error);
  }
};

export default useLocalStorage;
