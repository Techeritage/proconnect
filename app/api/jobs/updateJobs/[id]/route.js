import connectDb from "@/utils/config/db";
import postJobs from '@/utils/models/jobs';
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    try{

        await connectDb();

        const { id } = await params;
        const jobPost = await postJobs.findById(id);

        if(!jobPost){
            return NextResponse.json({
                message: "cant find post you want to update",
                status: 404
            })
        }

        const { companyName,
            jobTitle, 
            jobDescription, 
            requiredSkills, 
            experience, 
            location } = await req.json();

        const updatedData = {
            companyName: companyName || jobPost.companyName,
            jobTitle:  jobTitle || jobPost. jobTitle,
            jobDescription:  jobDescription|| jobPost. jobDescription,
            requiredSkills: requiredSkills || jobPost.requiredSkills,
            experience: experience || jobPost.experience,
            location: location || jobPost.location,
            updatedAt: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' }) 
        }

        const updatedJob = await postJobs.findByIdAndUpdate(
            id, 
            updatedData, 
            {new: true, runValidators: true});

            return NextResponse.json({
                message: "you updated a blog Post",
                data: updatedJob,
                status: 201
            })
    } catch (error) {
        console.error("server error:", error.message);
        return NextResponse.json({
            error: error.message,
            message: `server error, ${error.message}`,
            status: 500
        })
    }
}

