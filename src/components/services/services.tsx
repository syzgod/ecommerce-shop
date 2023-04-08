import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

const getProducts = (): any => {
  axios.get(BASE_URL).then((response) => {
    return response.data;
  });
};

export default getProducts;
