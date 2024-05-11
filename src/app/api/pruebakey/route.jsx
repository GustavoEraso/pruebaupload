
import { NextResponse } from 'next/server';
import { headers } from "next/headers";
import { Darker_Grotesque } from 'next/font/google';
// import { API_KEY } from '../config';


  const API_KEY = process.env.NEXT_PUBLIC_MY_APIKEY
  
  export  async function POST(request) {  
  

 
  const body = await request.json();
  const {apiKey} = body

   
    
//   if (apiKey !== `Bearer ${API_KEY}`) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }


  
return NextResponse.json({SERVER:API_KEY , navegador: apiKey ,igualee: apiKey === API_KEY}) 
     
    
}
   
