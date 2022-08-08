import Axios from 'axios';



export const getAllProducts = () => Axios.get('http://localhost:9999/product')



export const sendOrder = (data: any) => {
  Axios.post('http://localhost:9999/order', data)
}






export const getAllOrders = () => Axios.get('http://localhost:9999/order')


export const getOrderApi = (id: number) => Axios.get(`http://localhost:9999/order/${id}`)

