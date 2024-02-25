import {useEffect, useState} from "react";
import {getUserInfo} from "../services/getUserInfo";
import {setUser} from "../redux/slices/authSlice";
import {useAppDispatch} from "./useAppDispatch";

export default function useFetchUser() : [boolean] {
    const dispatch = useAppDispatch();
    const [userFetched, setUserFetched] = useState(false);

    useEffect(() => {
        getUserInfo().then(user => {
            console.log(`Fetched user:`);
            console.log(user);

            dispatch(setUser(user));
            setUserFetched(true);
        });
    }, []);

    return [userFetched];
}
