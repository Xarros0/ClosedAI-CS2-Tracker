import { doGraphQLFetch } from "./graphql/fetch";
import { checkToken } from "./graphql/queries";
import Cookies from 'js-cookie';



const checkTokenValidity = async () => {
    try {
        const token = Cookies.get('token');
        console.log('Tokenvalidity:', token);
        const response = await doGraphQLFetch(import.meta.env.VITE_API_URL, checkToken, {  }, token);
        console.log('Response:', response);

        return response.checkToken;
    } catch (error) {
        console.error('Error checking token:', error);
        return false;
    }
};

export { checkTokenValidity };