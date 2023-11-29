function Raf() {
  // console.log(a);
  const [mainDAta, setMainData] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
  });
  const [count, setCount] = useState(0);

  const { D, setNewInputData, newInputData } = useForm({
    name: "",
    age: "",
  });
  console.log(D);
  // console.log(newData);
  // useEffect(() => {
  //   setMainData(ans);
  // }, [count]);

  const submitForm = (e) => {
    e.preventDefault();
    // const b = e.target.querySelectorAll("input");
    // const newData = {};
    // b.forEach((input) => {
    //   newData[input.name] = input.value;
    //   input.value = "";
    // });
    // const getInputValue = useForm(e);
    setCount(e);
    setNewInputData(e);
    setMainData([...mainDAta, newInputData]);
    setInputData({
      name: "",
      age: "",
      email: "email",
    });
    setMainData([...mainDAta, D]);
    console.log(mainDAta);
  };
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // console.log(e.target.tagName);
    // console.log(e.);
    // const tagName = setInputData({ ...inputData, [name]: value });
  };
  console.log(mainDAta);
  return (
    <>
      <form action="" onSubmit={submitForm}>
        {
          // inputData.map(input=><input name={`name${}`}></input>)
        }
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="age" onChange={handleChange} />
        <input type="text" name="email" onChange={handleChange} />
        <button type={"submit"}>sumit</button>
      </form>
    </>
  );
}

export default Raf;
