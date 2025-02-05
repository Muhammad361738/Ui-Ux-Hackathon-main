import { Product } from "@/types/product";

export const addTocart = (product : Product) =>{
    const cart : Product [] = JSON.parse(localStorage.getItem('cart')|| '[]')

    const existingProductIndex = cart.findIndex(item => item.id == product.id)

    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventory +=1
    }else{
        cart.push({
            ...product , inventory : 1
        })
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}

// Remove item from Add to cart 
export const removeFromCart = (productId : string) => {
        let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
        cart = cart.filter(item => item.id !== productId)
        localStorage.setItem('cart',JSON.stringify(cart))
}

//  Update cart product quantity 

export const updateCartQuantity = (productId : string , quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart')|| "[]")
    const productIndex = cart.findIndex(item => item.id === productId)

    if(productIndex > -1 ){
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart',JSON.stringify(cart))
    }
}

//  Get item Function 

export const getCartItem = (): Product [] => {
    return JSON.parse(localStorage.getItem('cart')|| '[]')
}