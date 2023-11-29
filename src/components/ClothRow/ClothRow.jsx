const ClothRow = ({
  rowDAta: {
    check,
    size,
    name,
    textArea,
    date,
    quantity,
    price,
    Colorselector,
    id,
  },
  rowDAta,
}) => {
  /*  Create a FormData components, the form contains input fields like Cloth Name, Cloth Id, Price, Quantity, Description, a select menu that contains three
colors as options like "red","blue","green" , add terms and condition with checkbox, add date field Manufacture date and add three radio button of Size "M",
"L" and "XL" */
  console.log(rowDAta, "daata");
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{id}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{textArea?.slice(0, 20)}</td>
        <td>{Colorselector}</td>
        <td>{size}</td>
        <td>{date}</td>
        <td>Delete</td>
      </tr>
    </>
  );
};

export default ClothRow;
