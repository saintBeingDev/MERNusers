import React, {useState} from 'react'
import { NavLink , useNavigate } from "react-router-dom";
import axios from 'axios'

// you are getting global error or something like that so you used this method from a https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el
const initialValues = {
    name: "",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
}

export default function Signup() {

    const navigate = useNavigate ();// thapa had used useHistory but it is replaced with useNavigate

    const [values, setValues] = useState(initialValues);

    const handleInputs = (e)=>{
        // const name = e.target.name
        // const email = e.target.email
        const {name , value} = e.target;

        setValues({
            ...values, 
            [name]:value,
        })
    }

    // We are using Fetch for fetching data from our state to server/auth.js by post method
    const PostData = async(e)=>{
        e.preventDefault()
        const {name, email, phone, work, password, cpassword } = values// here values is basically a user from thapa video
        console.log(values);

        try {
            const res = await fetch("http://localhost:8080/register", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // server vr data send krtana data nehmi string format mdhech pathvav lagel cause it doesnt understand json format
                name, email, phone, work, password, cpassword
            })

        })// /register ya route la data pathvaycha ahe

        const data = await res.json();

        if(res.status=== 422 || !data){
            window.alert("Invalid Registration")
            console.log("invalid registration");
        }else{
            window.alert("Registered successfully")
            console.log("success registered");

            navigate('/login')//register zalyavr login kraych mhnun
        }
        } catch (error) {
            console.log(`error occured `, error);
        }
        

        // const newUser = {
        //     name : values.name,
        //     email : values.email,
        //     phone : values.phone,
        //     work : values.work,
        //     password : values.password,
        //     cpassword : values.cpassword
        // }

        // try {
        //     await axios.post('http://localhost:3001/register', values)
            
        // } catch (error) {
        //     console.log(error);
        // }


    }


    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Sign up</h1>
                            <form method='POST' className="register-form" id='register-form'>

                                <div className="form-group">
                                     <label htmlFor="name">
                                         <i className="zmdi zmdi-account"></i>
                                     </label>
                                     <input type="text" name='name'autoComplete='off' value={values.name} onChange={handleInputs} placeholder='Your name'/>
                                </div>
                                <div className="form-group">
                                     <label htmlFor="email">
                                         <i className="zmdi zmdi-email"></i>
                                     </label>
                                     <input type="email" name='email'autoComplete='off' value={values.email} onChange={handleInputs} placeholder='Your email'/>
                                </div>
                                <div className="form-group">
                                     <label htmlFor="phone">
                                         <i className="zmdi zmdi-phone-in-talk"></i>
                                     </label>
                                     <input type="text" name='phone'autoComplete='off' value={values.phone} onChange={handleInputs} placeholder='Your phone number'/>
                                </div>
                                <div className="form-group">
                                     <label htmlFor="work">
                                         <i className="zmdi zmdi-slideshow"></i>
                                     </label>
                                     <input type="text" name='work'autoComplete='off' value={values.work} onChange={handleInputs} placeholder='Your Profession'/>
                                </div>
                                <div className="form-group">
                                     <label htmlFor="password">
                                         <i className="zmdi zmdi-lock"></i>
                                     </label>
                                     <input type="password" name='password'autoComplete='off' value={values.password} onChange={handleInputs} placeholder='Your password'/>
                                </div>
                                <div className="form-group">
                                     <label htmlFor="cpassword">
                                         <i className="zmdi zmdi-lock"></i>
                                     </label>
                                     <input type="password" name='cpassword'autoComplete='off' value={values.cpassword} onChange={handleInputs} placeholder='Confirm your password'/>
                                </div>
                                
                                <div className="form-button">
                                    <input type="submit" name='signup' id='signup' className='form-submit btn btn-primary' value="register" onClick={PostData}/>
                                </div>

                                <div className="form-button">
                                    <NavLink to="/login">i am already registered</NavLink>
                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
