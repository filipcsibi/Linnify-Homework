export const getMovies = async (page: number) => {
  const response = await fetch(
    `https://6448d351e7eb3378ca36d040.mockapi.io/api/movies?limit=6&page=${page}`,
  );

  const data = await response.json();
  console.log(data);
  return data;
};
