import mongoose from "mongoose";


const carSchema = mongoose.Schema({
    id:Number,
    name: String,
    description: String,
    description2: String,
    backgroundImage: String,
    leftButton: String,
    rightButton: String,
});

export default mongoose.model('carVideos', carSchema)