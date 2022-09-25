import axios from "axios";

const BASE_URL = process.env.BASE_URL;
const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
