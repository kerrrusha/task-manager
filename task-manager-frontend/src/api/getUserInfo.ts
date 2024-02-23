import {API_ENDPOINTS} from "../common/constants";

export const getUserInfo = async () => {
    const API_URL = process.env.REACT_APP_BACKEND_ORIGIN;
    const path = API_ENDPOINTS.getOauthUser;

    const response = await fetch(`${API_URL}${path}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
    });
    return response.json();
};
