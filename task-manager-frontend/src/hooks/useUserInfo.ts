import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PAGES} from "../common/constants";
import {getUserInfo} from "../api/getUserInfo";
import {User} from "../common/commonTypes";

export default function useUserInfo(isLogin : boolean) : [User, Function] {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        profilePhotoUrl: '',
    });

    useEffect(() => {
        if (!isLogin) {
            navigate(PAGES.login);
        }

        const initUserInfo = async () => {
            const user = await getUserInfo();
            setUser(user);
        };
        initUserInfo().then(r => console.log(r));
    }, [isLogin, navigate]);

    return [user, setUser];
}
