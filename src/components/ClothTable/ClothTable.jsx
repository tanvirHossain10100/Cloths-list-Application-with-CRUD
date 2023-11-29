import ClothRow from "../ClothRow/ClothRow";

const ClothTable = ({
  combinaionOfData: { mainData, setMainData },
  combinaionOfData,
}) => {
  return (
    <>
      <table className="form">
        <thead>
          <tr>
            {/* <td>{name}</td>
        <td>{id}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{textArea}</td>
        <td>{Colorselector}</td>
        <td>{date}</td>
        <td>{size}</td>
        <td>Delete</td> */}
            <th>Name:</th>
            <th>Id:</th>
            <th>Price:</th>
            <th>Quantity:</th>
            <th>Description:</th>
            <th>color:</th>
            <th>Size:</th>
            <th>Date:</th>
            <th>Delete:</th>
          </tr>
        </thead>
        <tbody>
          {mainData?.map((rowDAta) => (
            <ClothRow key={rowDAta.id} rowDAta={rowDAta}></ClothRow>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ClothTable;
