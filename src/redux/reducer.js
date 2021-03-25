export default function reducer(state = { users: [] }, action) {
    let newState = { ...state };
    switch (action.type) {
        case 'FETCH_USERS':
            newState.users = action.payload;
            return newState;
        case 'UPDATE_USERS':
            newState.users.forEach(user => {
                if (user.id === action.payload.id) {
                    user.name = action.payload.name;
                }
            })
            return newState;

        default: return state;
    }
}