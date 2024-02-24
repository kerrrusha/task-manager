import {API_ENDPOINTS} from "../common/constants";

export const postLoginToken = async (idToken : string) => {
    const API_URL = process.env.REACT_APP_BACKEND_ORIGIN;
    const path = API_ENDPOINTS.googleOAuthLogin;

    await fetch(`${API_URL}${path}`, {
        method: 'POST',
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"idToken" : idToken}),
    });
    return true;
};
