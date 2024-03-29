import axios from "axios"

const omdbApi = axios.create({
  baseURL: "https://omdbapi.com",
  params: {
    apikey: "fc1fef96",
  },
});

export const getMovies = async () => {
  try {
    const response = await omdbApi.get("/?s=all&page=1")
    if (response.status !== 200) {
      throw new Error("Error fetching data")
    }
    else {
      return response.data
    }
  }
  catch (error) {
    console.log(error)
    throw error
  }
}
export const getSearchMovies = async (search) => {
  if (search !== "") {
    try {
      const response = await omdbApi.get(`/?s=${search}`)
      if (response.status !== 200) {
        throw new Error("Error fetch search data")
      }
      else {
        return response.data.Search
      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }
}

export const getMovieDetail = async (movieId) => {
  try {
    const response = await omdbApi.get(`/?i=${movieId}`);
    if (response.status !== 200) {
      throw new Error("Error fetching movie");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};