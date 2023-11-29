import ClothRow from "../ClothRow/ClothRow";

const ClothTable = ({
  combinaionOfData: { mainData, setMainData },
  combinaionOfData,
}) => {
  const delProduct = (id) => {
    console.log(id);
    const restProduct = mainData.filter((product) => product.id !== id);
    setMainData(restProduct);
  };
  return (
    <>
      <table className="form">
        <thead>
          <tr>
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
            <ClothRow
              key={rowDAta.id}
              rowDAta={rowDAta}
              delProduct={delProduct}
            ></ClothRow>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ClothTable;
