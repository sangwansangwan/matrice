import axiosInstance from '../../common/axios.service';

const product = () => {
  return axiosInstance
    .get('data/product', 
    )
    .then((response) => {
      return response;
    });
};


const productService = {
  product
};

export default productService;
