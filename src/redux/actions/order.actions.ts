export const getOrder = (order: any) => {
  return {
    type: "GET_ORDER",
    payload: order
  }
}
