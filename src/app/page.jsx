'use client'
// import UploadImage from "@/components/UploadImage";
import Link from "next/link";

// let API_KEY
const API_KEY = process.env.NEXT_PUBLIC_MY_APIKEY.slice(0,999)




export default function Home() {

  const toSee = async () => {
    console.log('la key',API_KEY)

    const headers = new Headers()
    headers.append("Content-Type","application/json")
    headers.append('Authorization', process.env.NEXT_PUBLIC_MY_APIKEY )


    console.log(headers)
    try {
      // await fetch(`http://localhost:3000/api/pruebakey`, {
        await fetch(`https://pruebaupload.vercel.app/api/pruebakey`, {
        method: 'GET',
        headers: headers
      }).then((resp)=> resp.json()).then((data)=> console.log(data))
     

    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);

    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => toSee()}>traer datos</button>
      <Link href='./uruguay'>uruguay</Link>
      <Link href='./humo'>Humo</Link>
      <h1>hola como tas?</h1>
      {/* <UploadImage/> */}
    </main>
  );
}
