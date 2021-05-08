// fetch("http://localhost:8000/fruits")
//   .then((res) => res.json())
//   .then((res) => {
//     this.setState({ fruits: res.fruits });
//   });

export const getFruits = async (search) => {
  let url = "http://localhost:8000/fruits?";
  if (search) {
    url = `${url}search=${search}`;
  }
  const res = await fetch(url);
  return await res.json();
};
