// 'use server'
'use client'

// import { logOut } from "@/app/lib/actions"
// import SignOut from './SignOut'
// import Button from '../co'
// import { cookies } from "next/headers"

// type Props = {
//     cookies: string
// }

function Logout({ logout }: any) {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout