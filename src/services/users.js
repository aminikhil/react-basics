export async function getUsers() {
    const usersResponse = await fetch('http://localhost:4300/users');
    const users = await usersResponse.json();
    return users;
}

export async function createUser(data) {
    const response = await fetch("http://localhost:4300/createUser", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-type': "application/json"
        }
    });
    const result = await response.json();
    return result;
}