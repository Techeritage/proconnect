import connectDb from '@/utils/config/db';
import cvUpload from '@/utils/models/cvUpload';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {

        const {fullName, email, phone, jobTitle, experience, cv} = await req.json();

        if(!fullName || !email || !phone || !jobTitle || !experience || !cv) {
            return NextResponse.json({
                message: 'input fields cannot be empty',
                status: 400
            })
        }

        await connectDb()

        const newCV = new cvUpload({
            fullName,
            email,
            phone,
            jobTitle,
            experience,
            cv,
            createdAt: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
        })

        await newCV.save()
        return NextResponse.json({
            data: newCV,
            message: `we've received your request, await our response`,
            status: 200

        })
    } catch (error) {
        console.error('internal error: ' + error.message)
        return NextResponse.json({
            error: error.message,
            message: `internal error: ${error.message}`,
            status: 500
        })
        

        
    }
}