import API from "./client";

export const addToCart = async(productId, quantity) => {
    try {
        const response = await API.post(`/carts/mine/items`, { productId, quantity });
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}

export const fetchCart = async() => {
    try {
        const response = await API.get(`/carts/mine`);
        console.log(response.data)
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}