export default (state=[], action) => {

    switch (action.type) {

        case 'FETCH_COLABORADORES_RESPONSE_DATA':
            return [action.payload];

        default:
            return state;
    }
};
