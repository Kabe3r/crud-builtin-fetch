'use server'

import { cookies } from "next/headers";

async function signIn(data: {}) {
 const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)

 });
 return cookies().set('user', JSON.stringify(await res.json()));
}

export async function authenticate(formData: {})  {
    try {
        await signIn(formData);
    } catch (err) {
        console.log(err)
    }
}
