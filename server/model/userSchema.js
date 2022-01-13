import mongoose  from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})


// We are hashing password here
// Save method la call kranyaadhi kay krayche te 
// it is middleware 
userSchema.pre('save', async function(next){ 
    console.log(`Inside hashing of pre function of userSchema `);
    if(this.isModified('password')){
        //user password = bcrypt.hash(user password, 12 key)
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
    //next() automatically user.save() method call houn jail
})


// WE are generating tokens
userSchema.methods.generateAuthToken = async function(){
    try {
        //generate tokens here
        //  jwt.sign( payload, secretOrPrivateKey, [options, callback])
        let myToken = jwt.sign({_id: this._id}, process.env.SECRET_KEY)// token generated
        this.tokens  = this.tokens.concat({token: myToken})// token added to db
        await this.save() 
        return myToken;
    } catch (error) {
        console.log(error);   
    }
}


export default mongoose.model('user',userSchema)