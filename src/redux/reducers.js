const initialState = {
    buttons: [
        { "title": "India" },
        { "title": "United States" },
        { "title": "China" },
        { "title": "Brazil" },
        { "title": "Australia" },
        { "title": "Canada" },
        { "title": "Russia" },
        { "title": "Mexico" },
        { "title": "Japan" },
        { "title": "Germany" },
        { "title": "France" },
        { "title": "United Kingdom" },
        { "title": "Italy" },
        { "title": "South Korea" },
        { "title": "Spain" },
        { "title": "Indonesia" },
        { "title": "Turkey" },
        { "title": "Saudi Arabia" },
        { "title": "South Africa" },
        { "title": "Argentina" }
    ],
    currentTitle: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state,
                currentTitle: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
