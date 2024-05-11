
import { NextResponse } from 'next/server';
import { headers } from "next/headers";
// import { API_KEY } from '../config';


  const API_KEY ='LA-CONTRASEÑA'
  
  export  async function GET() {  
    const headersList = headers();
    const apiKey = headersList.get("authorization");
   
    
//   if (apiKey !== `Bearer ${API_KEY}`) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }


  
return NextResponse.json({SERVER:API_KEY , navegador: apiKey, igual: apiKey === `Bearer ${API_KEY}`}) 
     
    
}
   
