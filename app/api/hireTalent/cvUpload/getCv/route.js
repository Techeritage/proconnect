import connectDb from '@/utils/config/db';
import cvUpload from '@/utils/models/cvUpload';
import { NextResponse } from 'next/server';

export async function GET() {
    try {

        await connectDb();

        const getCV = await cvUpload.find({})

        if(!getCV || getCV.length === 0) {
            return NextResponse.json({
                message: 'no available candidate cv yet',
                count: 0,
                status: 404
            })
        }

        return NextResponse.json({
            message: `${getCV.length} available CV's`,
            count: getCV.length,
            data: getCV,
            status: 200
        })
        
    } catch (error) {
        console.error('server error:', error.message);
        return NextResponse.json({
            error: error.message,
            message: `server error ${error.message}`,
            status: 500
        })
    }
}