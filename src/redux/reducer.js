export default function reducer(state = { users: [] }, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            const newState = state;
            newState.users = action.payload;
            return newState;

        default: return state;
    }
}