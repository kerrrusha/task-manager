import {postNewColumn} from "../services/postNewColumn";

export const MIN_VALUE_LENGTH = 3;

export const PAGES = {
	home: '/home',
    login: '/login',
    register: '/register',
    profile: '/profile',
}

export const API_ENDPOINTS = {
    getOAuthUser: '/user/info',
    googleOAuthLogin: '/oauth/google/login',
    logout: '/auth/logout',
    isAuthorized: '/user/authorized',
    fetchKanban: '/kanban/boards',
    postNewBoard: '/kanban/boards/new',
    postNewColumn: '/kanban/columns/new',
    deleteBoard: '/kanban/boards/delete',
}
