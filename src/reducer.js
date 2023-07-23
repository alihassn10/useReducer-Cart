export const reducer = (state, action) => {
    if (action.type == 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type == 'REMOVE_ITEM') {
        const newCart = state.cart.filter((item) => item.id !== action.id)
        return { ...state, cart: newCart }
    }
    if (action.type == 'INCREASE') {
        let newCart = state.cart.map((item) => {
            if (item.id == action.id) {
                return ({ ...item, amount: item.amount + 1 })
            }
            return item
        })
        return ({ ...state, cart: newCart })
    }
    if (action.type == 'DECREASE') {
        let newCart = state.cart.map((item) => {
            if (item.id == action.id) {

                return ({ ...item, amount: item.amount - 1 })
            }
            return item
        }).filter((item) => item.amount != 0)
        return ({ ...state, cart: newCart })
    }
    if (action.type == 'GET_TOTAL') {

        let total = 0;
        let amount = 0;
      
        state.cart.forEach((cartItem) => {
          const { price, amount: itemAmount } = cartItem;
          amount += itemAmount;
          const itemTotal = price * itemAmount;

          total += itemTotal;
        });
      
        total = parseFloat(total.toFixed(2));
      
        return ({ ...state,total, amount });
    }
    if(action.type=='LOADING')
    {
        return({...state,loading:true})

    }
    if(action.type=='DISPLAY_ITEMS')
    {
        return ({...state,cart:action.cart,loading:false})
    }
    return state
}
