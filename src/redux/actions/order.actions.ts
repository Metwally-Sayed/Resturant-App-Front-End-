export const getOrder = (orders: any) => {
  return {
    type: "GET_ORDERS",
    payload: orders
  }
}
