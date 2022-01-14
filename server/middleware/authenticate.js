import jwt from 'jsonwebtoken'
import User from '../model/userSchema.js'



const authenticate = async (req, res, next)=>{
    try {

        // ? Getting token 
        const token = req.cookies.jwtoken //jwtoken is name given to that token when we are creating log in and signup routes

        // ? Verifying token
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        // here 1st arg is for token we get from previous step and 2nd args is for comparing that token with secret key we had created


        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token})

        if(!rootUser) {
            throw new Error('User Not Found')
        }

        // ? Now if user is verified so we are getting users details
        req.token = token
        req.rootUser = rootUser // this rootUser has all the data of that specific user from DB
        req.userID = rootUser._id

        next();


    } catch (error) {
        res.status(401).send('Unauthorized: No token provided')
        console.log(error)
    }
}

export default authenticate


