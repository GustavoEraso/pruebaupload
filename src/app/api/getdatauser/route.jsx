
import { NextResponse } from 'next/server';

  
  export  async function GET(request) { 

    console.log(request)
    
   
return NextResponse.json({req:request }) 
     
    
}
   
export  async function POST(request) { 

  console.log(request)
  
 
return NextResponse.json({req:request }) 
   
  
}
 
