import connectDb from '@/utils/config/db';
import newsLetter from '@/utils/models/newsLetter';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {

        const { email } = await req.json();
        if(!email) {
            return NextResponse.json({
                message: 'email field cannot be empty',
            }, { status: 400 })
        }

        await connectDb()

        const checkIfSuscribed = await newsLetter.findOne({ email })
        if(checkIfSuscribed) {
            return NextResponse.json({
                message: `${email} already suscribed, Thanks for checking us out`,
            }, { status: 400 })
        }
        const suscribeData = new newsLetter ({
            email,
            suscribedAt: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
        })

        await suscribeData.save()
        return NextResponse.json({
            data: suscribeData,
            message: `you subscribed, hooray`,
        }, { status: 200 })

    } catch (error) {
        console.error('internal error:', error.message)
        return NextResponse.json({
            error: error.message,
            message: 'server error',
        }, { status: 500 }) 
    }
}