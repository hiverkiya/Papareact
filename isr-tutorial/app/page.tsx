import Image from 'next/image'
export const revalidate=10;
export default async function Home() {
  const res=await fetch('https://dummyjson.com/products/1')
  const data=await res.json()
  console.log(data)
  return (
    <main>
     <h1>Hello world</h1>
    </main>
  )
}
