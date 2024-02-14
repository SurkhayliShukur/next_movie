import axios from "axios"

const omdbApi =  axios.create({
    baseURL: "https://omdbapi.com",
  params: {
    apikey: "fc1fef96",
  },
})