// import Product from "@/app/components/Product";
import { getProduct } from "@/components/Products";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: {
    product: string
  }
}

async function getSingleProduct(id: string) {
 const res = await fetch(`https://dummyjson.com/products/${id}`);
 return await (res.json()) as Product
}

export async function generateStaticParams() {
  const products = await getProduct();
  
  return products?.map(productId => (
   productId?.id
  ))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const products = await getSingleProduct(params?.product);

 if (!products) {
  return {
    title: 'Example',
  }
 }
//  console.log(products)
 return {
  title: products?.title,
  metadataBase: new URL('http://localhost:3000'),
  description: products?.description
 }
}


export default async function page({ params }: Props ) {
  
  console.log(params)
  // const { productId } = params;
  const products = await getSingleProduct(params.product);


  

  // console.log(productId, product?.id, product.title)
  
    return (
        <div key={products?.id} className="mx-auto bg-blue-400 w-48 h-auto text-center">
        <h2>{products?.title}</h2>
        <p>{products?.description}</p>
        <p>{products?.price}</p>
        <span>{products?.stock}</span>
        <span>{products?.rating}</span>
        <p>{products?.brand}</p>
        <p>{products?.category}</p>
        <Image src={products?.thumbnail} alt="product-img" width={40} height={40} />
        <Link href='/products'>go to products</Link>
        </div>
  )
}
