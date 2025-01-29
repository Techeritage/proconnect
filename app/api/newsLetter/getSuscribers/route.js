import connectDb from '@/utils/config/db';
import newsLetter from '@/utils/models/newsLetter';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Connect to the database
    await connectDb();

    // Fetch all subscribers
    const allSubscribers = await newsLetter.find({});

    // Proper check for subscribed status
    const activeSubscribers = allSubscribers.filter(sub => sub.suscribed === true);

    // Return appropriate response based on subscriber count
    if (!activeSubscribers || activeSubscribers.length === 0) {
      return NextResponse.json({
        message: 'No active subscribers found',
        count: 0,
        status: 400,
      });
    }

    return NextResponse.json({
      message: `Currently have ${activeSubscribers.length} active subscribers`,
      count: activeSubscribers.length,
      data: activeSubscribers,
      status: 200,
    });

  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json({
      message: 'Failed to fetch subscribers',
      error: error.message,
      status: 500,
    });
  }
}