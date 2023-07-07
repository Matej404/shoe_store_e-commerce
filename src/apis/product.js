import API from './client';

export const fetchProduct = async() => {
    try {
        const response = await API.get('products');

        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}