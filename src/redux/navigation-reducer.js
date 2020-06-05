let initialState = {
    friends: [
        {id: 1, name: 'Centurion', photo: process.env.PUBLIC_URL + 'images/centurion.jpg'},
        {id: 2, name: 'Dasha', photo: process.env.PUBLIC_URL + 'images/dasha.png'},
        {id: 3, name: 'Kenny', photo: process.env.PUBLIC_URL + 'images/kenny.jpg'},
        {id: 4, name: 'Clown', photo: process.env.PUBLIC_URL + 'images/clown.jpg'},
        {id: 5, name: 'Geraldine', photo: process.env.PUBLIC_URL + 'images/geraldine.jpg'}
    ]
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default navigationReducer;