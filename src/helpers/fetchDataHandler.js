const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const getUserData = async (userId) => {
    const res = await fetch(`${baseUrl}/${userId || 1}`);
    return await res.json();
}

export const getAllData = async () => {
    const res = await fetch(baseUrl);
    return await res.json();
}