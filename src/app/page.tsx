import Login from "@/components/Login";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  

  return (
    <main className="flex flex-col items-center justify-center gap-y-4 capitalize h-96">
      <h1 className=" text-2xl">this is the main page</h1>
      <Link href='dashboard'>go to dashboard</Link>
      <Link href='products'>go to products</Link>
          </main>
  );
}
