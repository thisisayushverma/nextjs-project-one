import { NextResponse } from "next/server";
import fs from "fs";
import {sequelize} from "@/lib/sequelize.js";
import School from "@/model/School.js";

export async function POST(req){
    const formData = await req.formData();
    console.log(formData);
    try {
        console.log("in main function");
        await sequelize.authenticate();
        await sequelize.sync();

        // const newSchool =


    } catch (error) {
        console.log(error);
    }
}