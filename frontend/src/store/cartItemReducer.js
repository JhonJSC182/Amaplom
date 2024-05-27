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
