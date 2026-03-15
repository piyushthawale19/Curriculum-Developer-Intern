import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Content from '@/models/Content';

export async function GET() {
  try {
    await connectDB();
    const content = await Content.findOne().sort({ updatedAt: -1 });
    
    if (!content) {
      return NextResponse.json({ message: 'No content found' }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectDB();
    
    // Update existing content or create new
    const updatedContent = await Content.findOneAndUpdate(
      {},
      { ...body, updatedAt: Date.now() },
      { upsert: true, new: true }
    );

    return NextResponse.json(updatedContent);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
