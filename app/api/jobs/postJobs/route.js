import connectDb from '@/utils/config/db';
import postJobs from '@/utils/models/jobs';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {

        const { companyName,
            jobTitle, 
            jobDescription, 
            requiredSkills, 
            experience, 
            location } = await req.json()

            if(!companyName || 
                !jobTitle ||
                !jobDescription ||
                !requiredSkills ||
                !experience ||
                !location)
                return NextResponse.json({
                    message: `fill all available fields`,
                    status: 400
                })

                await connectDb();
                
                const postJob = new postJobs({
                    companyName,
                    jobTitle, 
                    jobDescription, 
                    requiredSkills, 
                    experience, 
                    location,
                    createdAt: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
                })

                await postJob.save();
                return NextResponse.json({
                    message: "you published a new job update",
                    data: postJob,
                    status: 201
                })
                
    } catch (error) {
        console.error('server error', error.message);
        return NextResponse.json({
            error: error.message,
            message: 'server error',
            status: 500
        })
        
    }
}