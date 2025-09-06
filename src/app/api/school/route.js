'use server'
import 'server-only';
import { NextResponse } from "next/server";
import { PrismaClient } from '@/generated/prisma';
import fs from "fs";
import cloudinary from '@/lib/cloudinary';

const prisma = new PrismaClient();

const uploader = async (buffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: "schoolImages" }, (error, result) => {
            if (error) {
                reject(error);
                throw error;
            } else {

                resolve(result);
            }
        }).end(buffer);
    })
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get("name");
        const address = formData.get("address");
        const city = formData.get("city");
        const state = formData.get("state");
        const contact = formData.get("contact");
        const image = formData.get("image");
        const email_id = formData.get("email_id");

        if (!name || !address || !city || !state || !contact || !image || !email_id) {
            return NextResponse.json({ message: "All fields are required", success: false });
        }

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const imageInstance = await uploader(buffer);

        console.log(imageInstance);


        const newSchool = await prisma.school.create({
            data: {
                name: name,
                address: address,
                city: city,
                state: state,
                contact: contact,
                image: imageInstance.secure_url,
                email_id: email_id
            }
        })

        console.log(newSchool);

        return NextResponse.json({ message: "School added successfully", data: newSchool, success: true });

    } catch (error) {

        console.log(error);
        return NextResponse.json({ message: "Something went wrong", success: false });
    }
}


export async function GET(req){
    try {
        const schools = await prisma.school.findMany({
            select:{
                id:true,
                name:true,
                address:true,
                city:true,
                image:true
            }
        });
        console.log(schools);
        return NextResponse.json({ message: "Schools fetched successfully", data: schools, success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong", success: false });
    }
}