import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: "Hello user! API successfully connect ho gayi hai.",
    status: 200
  });
}

// POST request ko handle karne ke liye naya function
export async function POST(request) {
  // Frontend se bheja gaya data nikalna
  const data = await request.json();
  
  // Pata lagana ki data kaha se aaya hai (humne frontend se 'source' bheja hai)
  console.log(`Backend ko yeh data mila (Aaya kaha se? ${data.source}): `, data);

  // Frontend ko wapas batana ki data mil gaya
  return NextResponse.json({
    message: `Success! Backend ko tumhara naam '${data.name}' aur page ka naam '${data.source}' mil gaya hai.`,
    receivedData: data
  });
}
