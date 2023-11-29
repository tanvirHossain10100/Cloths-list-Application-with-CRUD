// useForm.js
import { useState } from "react";

const useForm = (initialData) => {
  const [newInputData, setNewInputData] = useState(initialData); // {
  //   name: "",
  //   age: "",
  // }
  console.log(newInputData, "df");
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setNewInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    newInputData,
    handleChanges,
  };
};

export default useForm;
