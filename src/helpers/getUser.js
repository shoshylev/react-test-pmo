import { useState } from "react";

export const getUserData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId || 1}`);
    return await res.json();
    /*.then(res => res.json())
    .then(result => {
        console.log(result);
        return result;
    }
    await return*/
    //);
}