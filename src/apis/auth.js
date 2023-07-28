import API from './client';

export const login = async(credentials) => {
    try {
        const response = await API.post('auth/login', credentials);

        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}