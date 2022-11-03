import express, { json }  from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import Videos from './dbModel.js'



const port = process.env.PORT || 9000;
const app = express();
app.use(express.json())

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})
const connection_url = "mongodb+srv://preet:44gUrpreet@cluster0.ykjajgf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url)



app.get('/',(req,res)=>res.status(200).send('hello'))


app.get('/v1/posts',(req,res)=>res.status(200).send(data))


app.get('/v2/posts',(req,res)=>{ 
    Videos.find({}, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        } 
    })
})

app.post('/v2/posts',(req,res)=>{
    const dbVideos = req.body;

    Videos.create(dbVideos,(err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.listen(port,()=>console.log(`listening on localhost:${port}`))