import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const imgUrl = searchParams.get('imgurl');
//  if (!username) {
//     return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
//       width: 1200,
//       height: 630,
//     });
//   } 
 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 10,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="128"
          height="128"
          src={imgUrl}
        />
        
        
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}