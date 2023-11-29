// useForm.js
import { useState } from "react";

const useForm = (initialData) => {
  const [newInputData, setNewInputData] = useState(initialData); // {
  //   name: "",
  //   age: "",
  // }
  const handleChanges = (e) => {
    const { name, value } = e.target;
    if (name === "quantity") {
      if (value > 10) {
        return alert("You can not add more then 10 products");
      }
    }
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
