'use client'

import { authenticate } from "@/app/lib/actions";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

import { useState } from "react"
// import { useFormState } from "react-dom";

interface Login {
    username: string,
    password: string,
}

// async function signIn(data: {}) {
//     const res = await fetch('https://dummyjson.com/auth/login', {
//       method:  'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     //   body: JSON.stringify({
    
//     //     username: 'kminchelle',
//     //     password: '0lelplR',
//     //     // expiresInMins: 60, // optional
//     //   })
//     });
//     return res.json()
// }

export default function Login() {
    // const getUser = cookies().get('user')?.value
    const [formData, setFormData] = useState<Login>({
        username: '',
        password: ''
    })
    const router = useRouter();

    // // useE
    // if (getUser) {
    //     redirect('/dashboard')
    // }
    const handleChange = (event: { target: { name: any; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({...prevData, [name]: value}))
    }
    // const [errorMessage, dispatch] = useFormState(authenticate, undefined)

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // const formSubmit = new FormData();
        // formSubmit.append('formData', formData)
        // const formSubmit = new FormData();
        // formData.append('formData', formData);
        try {
            await authenticate(formData)
                router.push('/dashboard')
            // setTimeout(() => {
            // }, 3000);
        } catch (err) {
            console.log(err)
        }
    }
// console.log(errorMessage)

  return (
    <div className="flex flex-col items-center">
    <h1 className="text-2xl">
        Login Page
    </h1>
    <form onSubmit={handleSubmit}>
        <input className="my-2" type="text" name="username" placeholder="username" onChange={handleChange} />
        <br />
        <input type="password" name="password" onChange={handleChange}/>
        <br />
        <button className="bg-blue-500 rounded px-4 text-white mt-4" type="submit">Login</button>
    </form>
    </div>
  )
}
