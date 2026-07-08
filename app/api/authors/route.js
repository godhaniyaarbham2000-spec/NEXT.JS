import { NextResponse } from 'next/server';
import { AuthorRepository } from '../../../repositories/authorRepository';

const authorRepo = new AuthorRepository();

// GET all authors
export async function GET() {
  try {
    const authors = await authorRepo.getAllAuthors();
    return NextResponse.json({ success: true, data: authors });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// POST create a new author
export async function POST(request) {
  try {
    const body = await request.json();
    const author = await authorRepo.createAuthor(body);
    return NextResponse.json({ success: true, data: author }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
