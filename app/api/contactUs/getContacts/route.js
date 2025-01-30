import connectDb from '@/utils/config/db';
import contactUs from '@/utils/models/contactUs';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try{

        await connectDb();

        const getContactUs = await contactUs.find({});
        if(!getContactUs || getContactUs.length === 0){
            return NextResponse.json({
                message: "contact us unavailable",
                status: 404
            })
        }

        return NextResponse.json({
            message: "view a users feedback",
            data: getContactUs,
            status: 200
        })

    } catch (error) {
        console.error("internal error: ", error.message);
        return NextResponse.json({
            error: error.message,
            message: "server error",
            status: 500
        })
    }
}
