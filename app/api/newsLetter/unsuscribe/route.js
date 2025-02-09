import { connectDb } from '@/utils/config/db';
import newsLetter from '@/utils/models/newsLetter';
console.log('Starting PUT request handler...');
import { NextResponse } from 'next/server';

console.log('starting ...')

export async function PUT(req) {
    try {

        const { email, suscribed } = await req.json();

        if(!email) {
            return NextResponse.json({
                message: "you're trying cancel subscription pls provide your email address",
            }, { status: 400 })
        }

        await connectDb();

        const checkEmail = await newsLetter.findOne({ email: email});
        if(!checkEmail) {
            return NextResponse.json({
                message: "you're not on our subscribers list",
            }, { status: 400 })
        }

        const suscribedId = checkEmail._id;
        const updateStatus = {
            suscribed: suscribed,
        }

        const unsuscribed = await newsLetter.findByIdAndUpdate(
            suscribedId, 
            updateStatus, 
            {new: true, runValidators: true});

        await newsLetter.findByIdAndDelete(suscribedId);

            return NextResponse.json({
                message: "oops!!, you've unsuscribed from our list, T'was nice to have you!!",
                data: unsuscribed,
                status: 200
            })
    } catch (error) {
        console.error('internal error:', error.message)
        return NextResponse.json({
            error: error.message,
            message: 'server error',
            status: 500

        })
    }

}