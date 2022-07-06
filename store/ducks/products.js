export const Types = {
  GET: "GET_PRODUCTS",
  REMOVE: "REMOVE_PRODUCTS",
};

const INITIAL_STATE = {
  productsList: []
};

export default function manipulateProductList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET:
      return {
        ...state,
        productsList: [
          {id: 1, name: 'Iogurte', isPerishable: true},
          {id: 2, name: 'Manteiga', isPerishable: true},
          {id: 3, name: 'Pão', isPerishable: true},
          {id: 4, name: 'Leite', isPerishable: true},
          {id: 5, name: 'Molho de Tomate', isPerishable: true},
          {id: 6, name: 'Sal', isPerishable: false},
          {id: 7, name: 'Arroz', isPerishable: false},
          {id: 8, name: 'Feijão', isPerishable: false},
          {id: 9, name: 'Lentilha', isPerishable: false},
          {id: 10, name: 'Soja', isPerishable: false},
        ]
      };
    case Types.REMOVE:
      return {
        ...state,
        productsList: [...state.productsList.filter(product => product.id !== action.payload.id)]
      }
      
    default:
      return state;  
  }
}

export const Creators = {
  getProductsList: text => ({
    type: Types.GET,
    payload: {
      text
    }
  }),

  removeProduct: id => ({
    type: Types.REMOVE,
    payload: {
      id
    }
  }),
}