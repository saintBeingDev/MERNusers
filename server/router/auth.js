import express from "express";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
const router = express.Router();
import './../db/conn.js'
import User from '../model/userSchema.js'
import authenticate from '../middleware/authenticate.js'

router.get('/', (req,res)=>{
    res.send(`Auth Router Triggered`)
})


//Todo This route is for registering new users
// ! using promises
// router.post('/register', (req, res)=>{
//     const { name, email, phone, work, password, cpassword } = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).send({error: "Please fill the all fields"})
//     }
    
//     //! First check if the user exist in database or not 
//     User.findOne({email:email})
//     .then((userExitInDB)=>{
//         if(userExitInDB)
//             return res.status(422).send({ error: "Email is alread Exist"})
        
//         //! If not found then create new user 
//         // if key value pairs are not same then we have to write all this data as below
//         // const user = new User({ name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword })
//         // But as key value pairs have same name so we can use this below syntax which is part of ES6
//         // const user = new User({ name, email, phone, work, password, cpassword })
//         const user = new User({ name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword })
//         // Now this 'user' variable contain single document from req.body
//         user.save().then(()=>{
//             res.status(201).send({message:"Successfully added user to db"})//user registerd
//         })
//         .catch((err)=>{
//             res.status(500).send({error:"Failed to registerd" ,err})
//         })


//     }).catch(err=>{console.log(err)})

// })

// Todo: Same router.post but asynced
// router.post('/register', async (req, res)=>{
    
//     const { name, email, phone, work, password, cpassword } = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).send({error: "Please fill the all fields"})
//     }
    
//     //! First check if the user exist in database or not 
//     try{
//         const userExitInDB = await User.findOne({email:email})
//         if(userExitInDB)
//             return res.status(422).send({ error: "Email is alread Exist"})
         
//         //! If not found then create new user 
//         const user = new User({ name, email, phone, work, password, cpassword })       
//         // Now this 'user' variable contain single document from req.body
//         await user.save()
        
//         res.status(201).send({message:"Successfully added user to db"})//user registerd
//     }catch(err){
//         res.send(err)
//     }
    
// })
// Todo: Same router.post but password HASHED
router.post('/register', async (req, res)=>{
    
    const { name, email, phone, work, password, cpassword } = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).send({error: "Please fill the all fields"})
    }
    
    //! First check if the user exist in database or not 
    try{
        const userExitInDB = await User.findOne({email:email})
        if(userExitInDB)
            return res.status(422).send({ error: "Email is alread Exist"})
        else if(password !== cpassword){
            return res.status(422).send({ error: "Passwords are not matching"})
        }
        //! If not found then create new user 
        const user = new User({ name, email, phone, work, password, cpassword }) 

        // ! before saving this data to DB we need to hash password
        // that code is writtten under userSchema.js
        // we can also use like:
        // user.password = await bcrypt.hash(user.password , 10) 

        await user.save()
        
        res.status(201).send({message:"Successfully added user to db"})//user registerd
    }catch(err){
        res.send(err)
    }
    
})


//! Login router
// router.post('/signin', async(req,res)=>{
//     try{

//         const {email, password} = req.body

//         if(!email || !password)
//             return res.status(400).send({error:"Pls fill the data"})

//         const userWantedToLogin = await User.findOne({email:email})//return promise either response or reject
//         console.log(userWantedToLogin)

//         // to check that hashed password from db and password send by user are same
//         const isMatch = await bcrypt.compare(password, userWantedToLogin.password)
//         //                                   ^ DB Pass    ^ pass Sent by user

//         if(userWantedToLogin){//user Successfully logged in 

//             if(!isMatch){// if some email is not registerd in db then it gives null
//                 res.send({error:"Invalid Credentials pass"})
//             }else{
//                 res.send({message:"User Logged in successfully......"})
//             }

//         }else{
//             res.status(400).send({error:"Invalid credentials"})
//         }



//     }catch(err){
//         res.send(err)
//     }
    
// })

// ! Same login route with tokens
router.post('/signin', async(req,res)=>{
    let token
    try{

        const {email, password} = req.body

        if(!email || !password)
            return res.status(400).send({error:"Pls fill the data"})

        const userWantedToLogin = await User.findOne({email:email})//return promise either response or reject
        console.log("userWantedToLogin")
        console.log(userWantedToLogin)

        // to check that hashed password from db and password send by user are same
        if(userWantedToLogin){//user Successfully logged in 
            const isMatch = await bcrypt.compare(password, userWantedToLogin.password)

            // create token which is inside userSchema.js
            token =await userWantedToLogin.generateAuthToken();//returns promise

            console.log('This is token details');
            console.log(token);


            // ! Storing JWT tokens in Cookies
             // same token which we generated in line number 158 =>token =await userWantedToLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                //    ^nameOfCookie  ^itsValue
                expires: new Date(Date.now + 2592000000),// 30 days from register token will expire
                httpOnly: true// so it can also work on our localhost
            } )


            if(!isMatch){// if some email is not registerd in db then it gives null
                res.send({error:"Invalid Credentials pass"})
            }else{
                res.send({message:"User Logged in successfully......"})
            }

        }else{
            res.status(400).send({error:"Invalid credentials"})
        }



    }catch(err){
        res.send(err)
    }
    
})

// Handling about page route
// Todo we want to only show about us page to user if he had successfully logged in and had his token generated
// ? So here function named authenticate is middleware which handles this authentication process, imported from our middleware folder
router.get('/about', authenticate, (req, res)=>{
    console.log('Hello about');
    res.send(req.rootUser);
})

// Get user data for contact us and home page
router.get('/getdata', authenticate, (req,res)=>{
    console.log('Hello from getdata route')
    res.send(req.rootUser)
})

// Contact us page
router.post('/contact', authenticate, async (req,res)=>{
    try {
        //get data send by user from req.body
        const { name, email, message } = req.body

        if(!name || !email || !message){
            console.log('Error in contact form')
            return res.json({error:"Plz fill the contact form"})
        }

        const userContact = await User.findOne({_id: req.userID}) //_id is from DB & req.userID is getting from authentiate.js i.e we are checking id from database and id from request are same or not
        // if we get that userContact then add the contact page data to  DB
        if(userContact){
            const userMessage = await userContact.addMessage(name,email, message)
            // here addMessage is func created to store the message from contact page to DB and it is defined under userSchema.js

            await userContact.save()
            res.status(201).json({message: "user Contact successfully"})
        }

    } catch (error) {
        console.log(error)
    }
})

router.get('/logout',async (req,res)=>{
    console.log('Logout page from auth.js')
    res.clearCookie('jwtoken',{path:'/'}) 
    res.status(200).send('User logout')
})

export default router