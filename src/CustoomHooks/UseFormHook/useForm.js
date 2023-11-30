// useForm.js
import { useState } from "react";

const useForm = (initialData) => {
  const [newInputData, setNewInputData] = useState(initialData);

  const [maxLenght, setMaxLength] = useState(false); // {
  //   name: "",
  //   age: "",
  // }
  const handleChanges = (e) => {
    const { name, value } = e.target;
    console.log(typeof Number(value));
    if ((name === "name" && value > 0) || value < 0) {
      console.log(typeof value, "hg");
      return alert("Please type text");
    }
    if (name === "name") {
      if (value.length > 9) {
        return setMaxLength(true);
      }
    } else {
      setMaxLength(false);
    }
    if (name === "quantity") {
      if (value > 10) {
        return alert("You can not add more then 10 products");
      }
    }
    if (value < 0) {
      alert("You can not put negative number");
      e.target.value = "";
      return;
    }

    setNewInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    newInputData,
    handleChanges,
    maxLenght,
  };
};

export default useForm;
