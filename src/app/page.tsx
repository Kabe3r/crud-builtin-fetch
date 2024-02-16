import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-y-4 capitalize h-96">
      <h1 className=" text-2xl">this is the main page</h1>
      <Link href='dashboard'>go to dashboard</Link>
      <Link href='contact-us'>go to contact</Link>
      <Link href='cart'>go to cart</Link>
      <Link href='products'>go to products</Link>
          </main>
  );
}
