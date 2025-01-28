import connectDb from "@/utils/config/db";
import blog from "@/utils/models/blog";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    try{

        await connectDb();

        const { id } = await params;
        const blogPost = await blog.findById(id);

        if(!blogPost){
            return NextResponse.json({
                message: "cant find post you want to update",
                status: 404
            })
        }

        const { blogTitle, blogBody, blogImage, blogPhoto, blogAuthor, blogReadTime } = await req.json();

        const updatedData = {
            blogTitle: blogTitle || blogPost.blogTitle,
            blogBody: blogBody || blogPost.blogBody,
            blogImage: blogImage|| blogPost.blogImage,
            blogPhoto: blogPhoto || blogPost.blogPhoto,
            blogAuthor: blogAuthor || blogPost.blogAuthor,
            blogReadTime: blogReadTime || blogPost.blogReadTime,
            updatedAt: new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' }) 
        }

        const updatedBlog = await blog.findByIdAndUpdate(
            id, 
            updatedData, 
            {new: true, runValidators: true});

            return NextResponse.json({
                message: "you updated a blog Post",
                data: updatedBlog,
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