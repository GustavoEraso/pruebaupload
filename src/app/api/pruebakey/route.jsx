
import { NextResponse } from 'next/server';
import { headers } from "next/headers";

// import { API_KEY } from '../config';


  // const API_KEY = process.env.NEXT_PUBLIC_MY_APIKEY
  
  export  async function GET(request) { 
    
    const headersList = headers(request);
    const aut = headersList.get('authorization')
    const entradas = []

    for (const pair of headersList.entries()) {
      entradas.push(`${pair[0]}: ${pair[1]}`);
    }
  

 
  // const body = await request.json();
  // const {apiKey} = body.apikey
  

   
    
//   if (apiKey !== `Bearer ${API_KEY}`) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }


  
// return NextResponse.json({SERVER:API_KEY , navegador: apiKey ,igualee: apiKey === API_KEY}, entradas ) 
return NextResponse.json({entradas: entradas, aut }) 
     
    
}
   
