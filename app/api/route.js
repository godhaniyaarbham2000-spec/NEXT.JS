import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: "Hello from dummy API! (No Database)" });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ 
    message: `Hello ${body.name || 'User'}, your data is received!` 
  });
}
