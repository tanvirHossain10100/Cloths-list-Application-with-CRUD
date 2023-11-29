// useForm.js
import { useState } from "react";

const useForm = (initialData) => {
  const [newInputData, setNewInputData] = useState(initialData); // {
  //   name: "",
  //   age: "",
  // }
  const handleChanges = (e) => {
    const { name, value } = e.target;
    console.log(value, "value");
    if (value < 0) {
      return alert("You can not put negative number");
    }
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
