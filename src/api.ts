import Axios from 'axios';



export const getAllProducts = () => Axios.get('http://localhost:9999/product')

