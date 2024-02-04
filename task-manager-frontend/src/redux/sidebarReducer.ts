const initialState = {
    activeKey: 0
};

const sidebarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ACTIVE_BUTTON':
            return {
                ...state,
                activeKey: action.payload
            };
        default:
            return state;
    }
};

export default sidebarReducer;
