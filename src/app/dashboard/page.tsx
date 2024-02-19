import Link from "next/link";
import { cookies } from "next/headers";

export default function page() {
  return (
    <div>
        <Link href='/dashboard'>dashboard</Link>
        <br />
        <Link href='/'>go to home</Link>
    </div>
  )
}
