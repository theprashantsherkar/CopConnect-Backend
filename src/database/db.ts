import mongoose from 'mongoose';


export async function connectDB() {
    try {
        const url:string = process.env.MONGO_URL | "dbkvkrf";
        if (typeof (url) !== undefined) {
            mongoose.connect(url, {
                dbName: "CopConnect"
            })
        }
        
    } catch (error) {
        console.log(error);
    }
}


type mongoURL = string;
