import { NextResponse } from 'next/server';
import { db, getDbError } from '@/lib/db';

// GET /api/contact — fetch all contacts
export async function GET() {
  if (getDbError()) {
    return NextResponse.json({ error: "INIT ERROR: " + getDbError().message }, { status: 500 });
  }
  
  try {
    const contacts = await db.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(contacts);
    
  } catch (error) {
    console.error("GET Prisma Error:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

// POST /api/contact — create a new contact
export async function POST(request) {
  if (getDbError()) {
    return NextResponse.json({ error: "INIT ERROR: " + getDbError().message }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, email, phone, source } = body;
    
    // Sirf naam zaroori hai, taaki purana form bhi chal jaye
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }
    
    const contact = await db.contact.create({
      data: { name, email, phone, source },
    });
    
    return NextResponse.json(
      { message: 'Contact successfully created!', contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Prisma Error:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to create contact' },
      { status: 500 }
    );
  }
}
