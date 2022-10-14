
export const orderReducer = (state = [], action: any) => {
  switch (action.type) {
    case "GET_ORDERS":
      return action.payload
    default:
      return state;
  }
}


