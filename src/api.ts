import Axios from 'axios';



export const getAllProducts = () => Axios.get('http://localhost:9999/product')


export const sendOrder = (data: any) => {
  console.log(data);
  Axios.post('http://localhost:9999/order', data)
} 
