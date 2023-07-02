const CartReducer = (state,action) => {
  if(action.type === "ADD_TO_CART")
  {
    let {id,name,price,amount,image} = action.payload;
    
    //check item already exist
    const isExist = [...state.cart].filter((val)=>val.id === id);
    if(isExist.length ===0)
    {
        let cartProduct;
        cartProduct={
            id:id,
            name:name,
            price:price,
            amount:amount,
            sub_total: price * amount,
            image
        }
        return {
            ...state,
            cart:[...state.cart,cartProduct]
        }
    }
  }

  if(action.type === "CLEAR_CART")
  {
    return {
        ...state,
        cart:[],
    }
  }

  if(action.type === "REMOVE_ITEM")
  {
    let {id} = action.payload;
    const newCart = [...state.cart].filter((val)=>val.id !== id);
    return {
        ...state,
        cart:newCart,
    }
  }

  if(action.type === "TOTAL_CART_PRICE")
  {
    const total_amount = state.cart.reduce((initialValue,currElem)=>{
        let {price,amount} = currElem;
        initialValue = initialValue + price * amount;
        return initialValue;
    },0);

    return {
        ...state,
        total_amount
    }
  }

  if(action.type === "TOTAL_CART_COUNT")
  {
    const total_item = state.cart.reduce((initialValue,currElem)=>{
        let {amount} = currElem;
        initialValue = initialValue + amount;
        return initialValue;
    },0);

    return {
        ...state,
        total_item
    }
  }

// if(action.TYPE === "DECREMENT")
// {

// }

if(action.type === "INCREMENT")
{
    const updatedata = state.cart.map((currElem)=>{
        if(currElem.id === action.payload)
        {
            let inc = currElem.amount + 1;
            if(inc >= 5)
            {
                inc = 5;
            }
            return {
                ...currElem,
                amount:inc,
                sub_total:inc * currElem.price
            }
        }else{
            return currElem;
        }
    });
    return {
        ...state,
        cart:updatedata
    }
}

if(action.type === "DECREMENT")
{
    const updatedata = state.cart.map((currElem)=>{
        if(currElem.id === action.payload)
        {
            let dec = currElem.amount - 1;
            if(dec <= 1)
            {
                dec = 1;
            }
            return {
                ...currElem,
                amount:dec,
                sub_total:dec * currElem.price
            }
        }else{
            return currElem;
        }
    });
    return {
        ...state,
        cart:updatedata
    }
}

  return state;
}

export default CartReducer;