import { postCartItem, editCartItem, deleteCartItem } from "../utils/cartItemApiUtils"


//TYPES
export const RECEIVE_CARTITEMS = 'cart_items/RECEIVE_CARTITEMS'
export const RECEIVE_CARTITEM = 'cart_items/RECEIVE_CARTITEM'
export const CREATE_CARTITEM = 'cart_item/CREATE_CARTITEM'
export const UPDATE_CARTITEM = 'cart_item/UPDATE_CARTITEM'
export const DESTROY_CARTITEM = 'cart_item/DESTROY_CARTITEM'


//ACTION CREATORS
export const receiveCartItems = data => ({
    type: RECEIVE_CARTITEMS,
    data
})

export const receiveCartItem = data => ({
    type: RECEIVE_CARTITEM,
    data 
})

export const newCartItem = data => ({
    type: CREATE_CARTITEM,
    data
})

export const updateCartItem = cart_item => ({
    type: UPDATE_CARTITEM,
    cart_item
})

export const removeCartItem = cart_itemId => ({
    type: DESTROY_CARTITEM,
    cart_itemId
})


//THUNK ACTION CREATORS

export const fetchCartItems = () => (dispatch, getState) => {
    fetch('api/cart_items')
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(receiveCartItems(data))
    })
}

export const fetchCartItem = (cart_itemId) => (dispatch, getState) => {
    fetch(`api/cart_items/${cart_itemId}`)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(receiveCartItem(data)) 
    })
}

export const createCartItem = (cartItem) => (dispatch, getState) => {
    postCartItem(cartItem)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })  
    .then(data => {
        dispatch(newCartItem(data)) 
    })
    // .catch(error => {
    //     console.log('Failed to create cart item:', error)
    // })
}

export const changeCartItem = cart_item => (dispatch, getState) => {
    editCartItem(cart_item)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(updateCartItem(data))
    })
}

export const clearCartItem = cart_itemId => (dispatch, getState) => {
    deleteCartItem(cart_itemId) 
        .then(res => {
        if (!res.ok) {
            throw res
        }
        dispatch(removeCartItem(cart_itemId))
    })
}


const cartItemReducer = (state = {}, action) => {
    const nextState = { ...state }
        switch (action.type) {
        case RECEIVE_CARTITEM:
            nextState[action.data.cartItem.id] = action.data.cartItem;
            return nextState;

        case CREATE_CARTITEM:
            nextState[action.data.id] = action.data;
            return nextState;    
        
        case UPDATE_CARTITEM:
            nextState[action.data.cartItem.id] = action.data.cartItem;
            return nextState;
        
        case RECEIVE_CARTITEMS:
            return action.data.cartItems
    
        case DESTROY_CARTITEM: 
            delete nextState[action.cart_itemId];
            return nextState;
        
            default:
            return state;
    }
}