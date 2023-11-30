// useForm.js
import { useState } from "react";

const useForm = (initialData) => {
  const [newInputData, setNewInputData] = useState(initialData);

  const [maxLenght, setMaxLength] = useState(false);
  const [maxLengthForId, setMaxLengthForId] = useState(false); // {
  //   name: "",
  //   age: "",
  // }
  // let maxValueName;
  const handleChanges = (e) => {
    const { name, value } = e.target;
    if (value < 0) {
      e.target.value = "";
      return alert("Please insert positive value");
    }
    if ((name === "name" && value > 0) || value < 0) {
      e.target.value = "";
      return alert("Please type text");
    }
    setMaxLength(false);
    if (name === "name") {
      if (value.length > 9) {
        const value = e.target.value;
        // console.log(value);
        e.target.value = value;
        // maxValueName = 10;
        return setMaxLength(true);
      }
      return;
    }

    if (name === "id") {
      if (value.toString().length > 3) {
        const value = e.target.value.toString();
        e.target.value = value.slice(0, 3) * 1;
        setMaxLengthForId(true);
        return;
      }
    }
    setMaxLengthForId(false);
    if (name === "quantity") {
      if (value > 10) {
        e.target.value = "";
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
    // maxValueName,
    maxLengthForId,
  };
};

export default useForm;
