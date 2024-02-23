import {API_ENDPOINTS} from "../common/constants";

export const postLoginToken = async (idToken : string) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const path = API_ENDPOINTS.oauthLogin;

    await fetch(`${API_URL}${path}`, {
        method: 'POST',
        credentials: 'include', // include, *same-origin, omit
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(idToken),
    });
    return true;
};