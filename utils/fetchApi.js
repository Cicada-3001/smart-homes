import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': "2465e156ddmshbc6234b1134ff03p15f91fjsna2ca23a09c46" ,
    },
  });
    
  return data;
}