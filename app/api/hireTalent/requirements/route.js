import connectDb from '@/utils/config/db';
import { NextResponse } from 'next/server';
import hireTalent from '@/utils/models/hireTalent'

export async function POST(req) {
    try {

        const { 
            companyName, 
            fullName, 
            email, 
            phone, 
            jobTitle, 
            jobDescription, 
            requiredSkills, 
            experience, 
            location} = await req.json()

            if(!companyName || 
                !fullName ||
                !email ||
                !phone ||
                !jobTitle ||
                !jobDescription ||
                !requiredSkills ||
                !experience ||
                !location
            ) {
                return NextResponse.json({
                    message: 'fill all available fields',
                    status: 400
                })
            }

            await connectDb();

            const hireData = new hireTalent({
            companyName, 
            fullName, 
            email, 
            phone, 
            jobTitle, 
            jobDescription, 
            requiredSkills, 
            experience, 
            location,
            createdAt: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
            })

            await hireData.save()
            return NextResponse.json({
                message: `you've Succesfully Submitted your requirements for a Hire, check your inbox for more updates`,
                data: hireData,
                status: 201
            })
        
    } catch (error) {
        console.error('internal error', error.message);
        return NextResponse.json({
            error: error.message,
            message: 'server error',
            status: 500
        })
    }
}