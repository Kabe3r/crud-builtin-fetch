
import { Product } from "@/types"
import Image from "next/image";
import Link from "next/link";

// no-store no-cache: lamda server-side on demand
// force-cache: generated as static content


export async function getProduct() {
  const res = await fetch('https://dummyjson.com/products')
  const result = await res.json();
  return result.products as Product[];
}


export default async function Products() {
  const product = await getProduct();
 
  return (
    <>
        <h1 className="text-center my-10 text-4xl">Products</h1>
    <div className="flex flex-wrap gap-4 justify-center">
        {product?.map(product => ((
          <div key={product?.id} className="bg-blue-400 w-48 h-auto text-center">
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <p>{product?.price}</p>
                <span>{product?.stock}</span>
                <span>{product?.rating}</span>
                <p>{product?.brand}</p>
                <p>{product?.category}</p>
                <Image src={product?.thumbnail} alt="product-img" width={40} height={40} />
                <Link href={`products/${product?.id}`}>go to single product</Link>
        </div>
            )))}
    </div>
            </>
  )
}
