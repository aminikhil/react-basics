export function fetchUsers(users) {
    return {
        type: "FETCH_USERS",
        payload: users
    };
}