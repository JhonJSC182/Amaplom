export const postCartItem = (cart_item) => (
    fetch(`/api/cart_items`, {   // THIS LINE COULD BE WRONG
        method: 'post',
        body: JSON.stringify(cart_item),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)

export const editCartItem = (cart_item) => (
    fetch(`/api/cart_items/${cart_item.id}`, {
        method: 'PUT',
        body: JSON.stringify(cart_item),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)

export const deleteCartItem = (cart_itemId) => (
    fetch(`/api/cart_items/${cart_itemId}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)