import { NextResponse } from 'next/server';
import { PostRepository } from '../../../repositories/postRepository';

const postRepo = new PostRepository();

// GET all posts
export async function GET() {
  try {
    const posts = await postRepo.getAllPosts();
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// POST create a new post
export async function POST(request) {
  try {
    const body = await request.json();
    const post = await postRepo.createPost(body);
    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
