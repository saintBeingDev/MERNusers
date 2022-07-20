import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
const app = express()
import './db/conn.js'
import auth from './router/auth.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'


dotenv.config({path:'./config.env'}) // Once we specified this path in app.js we don't need to use this in other files, i.e. we can direct access our env vars with process.env
const PORT = process.env.PORT


// Middleware 
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
// !Example of middleware
// const middleware = (req,res,next)=>{
//     console.log(`Middleware is Triggered`);
//     next();
// }

// middleware router
app.use('/auth', auth)



// app.get('/',(req,res)=>{
//     res.send(`Hello from home`);
// })
// app.get('/about',middleware,(req,res)=>{
//     console.log(`Hello about`);
//     res.send(`Hello about`);
// })

// app.get('/contact',(req,res)=>{
//     // res.cookie("TestCookie" , 'OmNikam')
//     res.send(`Hello contact `);
// })
// app.get('/signin',(req,res)=>{
//     res.send(`Hello signin`);
// })
// app.get('/signup',(req,res)=>{
//     res.send(`Hello signUp `);
// })


app.listen(PORT,()=>{
    console.log(`Server listeing on ${PORT}`);
})