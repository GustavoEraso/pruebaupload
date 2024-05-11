
import { NextResponse } from 'next/server';
import { headers } from "next/headers";
import { Darker_Grotesque } from 'next/font/google';
// import { API_KEY } from '../config';


  const API_KEY ='LA-CONTRASEÑA'
  
  export  async function POST(request) {  
    const llaves = [];
    const headersList = headers(request);
  const apiKey = headersList.get("Authorization");
  const host = headersList.get('host')
  const origin = headersList.get('origin')
  headersList.forEach((data)=> llaves.push(data))
  const entradas = []

  for (const pair of headersList.entries()) {
    entradas.push(`${pair[0]}: ${pair[1]}`);
  }
   
    
//   if (apiKey !== `Bearer ${API_KEY}`) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }


  
return NextResponse.json({SERVER:API_KEY , navegador: apiKey,igual: apiKey === `Bearer ${API_KEY}`, entradas , host, origin}) 
     
    
}
   
