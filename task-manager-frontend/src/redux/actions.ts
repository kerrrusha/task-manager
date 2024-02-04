export const setActiveButton = (key: number) => {
    console.log(`setting active button: ${key}`);
    return {
        type: 'SET_ACTIVE_BUTTON',
        payload: key
    };
};
