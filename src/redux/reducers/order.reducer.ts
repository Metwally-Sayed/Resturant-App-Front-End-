

export const orderReducer = (state = [], action: any) => {
  switch (action.type) {
    case "GET_ORDER":
      return action.payload
    default:
      return state;
  }
}


