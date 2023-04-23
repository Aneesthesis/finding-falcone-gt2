const getToken = async () => {
  const response = await fetch("https://findfalcone.herokuapp.com/token", {
    "content-type": "application/json",
    mode: "no-cors",
    method: "GET",
    redirect: "follow",
  });
  console.log(response);
  if (!response) {
    return;
  }
  const data = await response.json();
  return data;
};
export default getToken;
