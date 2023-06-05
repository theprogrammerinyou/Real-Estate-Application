import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "d2172638f9msh663c64ca99c2119p139cc9jsn13b869f605cf",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
    
  return data;
}