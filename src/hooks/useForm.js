import { useState } from "react";

//Custom Hook para mantener un formulario donde le pasamos un objeto
export const useForm = (initialState = {}) => {
  //Creamos el useState para modificar y recoger los valores del formulario
  const [values, setValues] = useState(initialState);

  //funcion para reiniciar el formulario
  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  //funcion para cada vez que cambia uno de los valores
  //1º Coges todos los valores
  //2º coges por el target del nombre (email, password, nombre etc) y será igual al valor
  const handleInputChange = (e) => {
   
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //Devolvemos en un array
  return [values, handleInputChange, reset];
};
