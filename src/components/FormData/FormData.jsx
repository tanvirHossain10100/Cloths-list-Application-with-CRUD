import { useState } from "react";
import useForm from "../../CustoomHooks/UseFormHook/useForm";
import "./FormData.css";

const Form = ({ setMainData, mainData }) => {
  const [isChckBox, setIsCheckBox] = useState(false);
  const { maxLenght, newInputData, handleChanges } = useForm({});
  console.log(maxLenght);
  const submitForm = (e) => {
    e.preventDefault();
    let unique;
    const targetElemnt = e.target.querySelectorAll("input,textarea,select");
    targetElemnt.forEach((element) => {
      if (element.type === "radio") {
        element.checked = false;
      }
      // console.log;

      element.value = "";
      setIsCheckBox(!isChckBox);
      // newInputData.a = "e";
    });
    unique = mainData.find((uniueId) => uniueId.id === newInputData.id);
    console.log(unique, "d");
    if (unique?.id) {
      console.log("hey this is uniqueId");
      return alert("Please add unique id por each cloth");
    }
    const checkAllDataAvailibility = Object.keys(newInputData);
    console.log(checkAllDataAvailibility);
    if (checkAllDataAvailibility.length !== 9) {
      return alert("Please fill all input feild");
    }
    setMainData((prevData) => [...prevData, newInputData]);
  };
  return (
    <>
      <div className="form">
        <form action="" onSubmit={submitForm}>
          <label>
            {maxLenght ? (
              <span style={{ color: "red" }}>Name must be 10 character</span>
            ) : (
              <span>Name:</span>
            )}
            <input
              maxLength={10}
              type="text"
              name="name"
              placeholder="Please type your cloth name"
              required
              onChange={handleChanges}
            />
          </label>
          <br />
          <label>
            {isChckBox ? (
              <span>Id must be in 3 character</span>
            ) : (
              <span>Id:</span>
            )}
            <input
              maxLength={2}
              type="number"
              name="id"
              placeholder="Please type your cloth Id"
              required
              onChange={handleChanges}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              name="price"
              placeholder="Please type your cloth price"
              required
              onChange={handleChanges}
            />
          </label>
          <br />
          <label>
            quantity:
            <input
              maxLength={10}
              type="number"
              name="quantity"
              placeholder="Please type your product quantity"
              required
              onChange={handleChanges}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              name="date"
              placeholder="Manufacture date"
              required
              type="date"
              onChange={handleChanges}
            />
          </label>
          <br /> <br />
          <label>
            <p>Write Description about the project</p>
            <textarea
              name="textArea"
              id=""
              cols="30"
              rows="4"
              placeholder="Description"
              onChange={handleChanges}
            ></textarea>
          </label>
          <br />
          <select
            placeholder="select color"
            name="Colorselector"
            id=""
            onChange={handleChanges}
          >
            <option
              value=""
              disabled
              defaultValue={" Select your option"}
              required
            >
              Select your option
            </option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">green</option>
          </select>
          <br />
          {/*  */}
          <div>
            <h4 style={{ userSelect: "none" }}>
              {" "}
              Please select the size of the cloth
            </h4>
            <label htmlFor="mSize" className="radioClass" required>
              <span>M</span>
              <input
                id="mSize"
                name="size"
                type="radio"
                value="M"
                onChange={handleChanges}
              ></input>
            </label>
            <label className="radioClass">
              <span>L</span>
              <input
                name="size"
                type="radio"
                value="L"
                onChange={handleChanges}
              ></input>
            </label>
            <label className="radioClass">
              <span>XL</span>
              <input
                name="size"
                type="radio"
                value="XL"
                onChange={handleChanges}
              ></input>
            </label>
          </div>
          <label>
            <input
              style={{ display: "inline", width: "20px" }}
              type="checkbox"
              name="check"
              checked={isChckBox ? true : false}
              onChange={handleChanges}
              onClick={() => setIsCheckBox(!isChckBox)}
            />
            <span style={{ display: "inline" }}>
              <a href="#">Tesrms and condition</a>
            </span>
          </label>
          <br />
          <button disabled={isChckBox ? false : true} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
