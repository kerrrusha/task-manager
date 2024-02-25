import Cookies from "universal-cookie";
import {AUTH_TOKEN} from "../common/constants";

export const isLoggedIn = () => {
    const cookies = new Cookies();

    const authToken = cookies.get(AUTH_TOKEN);
    console.log(authToken);
    console.log(cookies);
    return !!authToken;
};
