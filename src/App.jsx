/* - Create a FormData components, the form contains input fields like Cloth Name, Cloth Id, Price, Quantity, Description, a select menu that contains three
colors as options like "red","blue","green" , add terms and condition with checkbox, add date field Manufacture date and add three radio button of Size "M",
"L" and "XL".
- When submit the form data it should be stored in local-storage.
- There should be another component called ClothTable that contain the ClothRow component.
- ClothRow contains the info of cloths in a table row data.
- Integrate user interactions to add, delete and data should be stored in local-storage.
- All type of form validation should be applied like can't take empty value, can't take take cloths that over max quantity, can't take negative value .
- Optional task: Make a custom hook named useForm for form data
 */

import { useEffect, useState } from "react";
import ClothTable from "./components/ClothTable/ClothTable";
import "./App.css";
import Form from "./components/FormData/FormData";
import getLocalStorageData from "./localStorage/localStorage";

function App() {
  const [mainData, setMainData] = useState(getLocalStorageData());
  useEffect(() => {
    getLocalStorageData(mainData);
  }, [mainData]);
  const combinaionOfData = {
    mainData,
    setMainData,
  };
  return (
    <>
      <div className="formRoot">
        <Form mainData={mainData} setMainData={setMainData}></Form>
        {mainData.length > 0 ? (
          <ClothTable combinaionOfData={combinaionOfData}></ClothTable>
        ) : (
          <h2>No product added yet please add product to see product</h2>
        )}
      </div>
    </>
  );
}

export default App;
