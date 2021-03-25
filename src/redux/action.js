export function fetchUsers(users) {
    return {
        type: "FETCH_USERS",
        payload: users
    };
}

export function updateUsers(userData) {
    return {
        type: "UPDATE_USERS",
        payload: userData
    }
}