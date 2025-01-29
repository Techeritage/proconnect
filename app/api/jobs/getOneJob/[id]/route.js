import connectDb from '@/utils/config/db';
import postJobs from '@/utils/models/jobs';
import { NextResponse } from 'next/server';

export async function GET(req, {params}) {
    try {

        await connectDb();

        const  { id } = await params;
        const jobs = await postJobs.findById(id);

        if(!jobs) {
            return NextResponse.json({
                message: "unable to display job details",
                status: 404
            })
        }

        return NextResponse.json({
            message: `are you a match!!, if so click apply ASAP`,
            data: jobs,
            status: 200
        })

    } catch (error) {
        console.error("server error:", error.message)
        return NextResponse.json({
            error: error.message,
            message: `internal error, ${error.message}`,
            status: 500
        })
    }
}