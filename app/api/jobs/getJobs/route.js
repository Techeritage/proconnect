import {connectDb} from '@/utils/config/db';
import postJobs from '@/utils/models/jobs';
import { NextResponse } from 'next/server';

export async function GET(req){
    try {

        await connectDb()

        const checkJobs = await postJobs.find();

        if(!checkJobs || checkJobs.length === 0){
            return NextResponse.json({
                message: "no recent job openings",
                status: 404
            })
        }

        return NextResponse.json({
            message: "see the openings we have",
            data: checkJobs,
            status: 200
        })

    } catch (error) {
        console.error('internal error:',error.message);
        return NextResponse.json({
            error: error.message,
            message: "server error",
            status: 500
        })
        
    }
}