const getLocalStorageData = (isTrueData) => {
  const data = localStorage.getItem("cloths");
  //   const data = localStorage.getItem();
  if (data && !isTrueData) {
    if (!isTrueData) {
      return JSON.parse(data);
    }
  } else if (isTrueData) {
    const upDateLocalTosrage = JSON.stringify(isTrueData);
    return localStorage.setItem("cloths", upDateLocalTosrage);
  }
  return [];
};
export default getLocalStorageData;
