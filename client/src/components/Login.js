import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const initialValues = {
    email:"",
    password:""
}

export default function Login() {

    const navigate = useNavigate();

    const [values, setValues] = useState(initialValues);

    const handleInput = (e)=>{
        const {name, value} = e.target

        setValues({
            ...values,
            [name] :value,
        })
    }


    const loginUser = async(e)=>{
        e.preventDefault();
        const {email, password} = values

        const res = await fetch('/auth/signin', {
            method:"POST", 
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email, password
            })
        })


        const data = res.json();
        console.log("data");
        console.log(data);

        if(res.status === 400 || !data){
            window.alert("Invalid credential")
            console.log("invalid credentail")
        }else{
            window.alert("Successfully logged in")
            navigate("/")
        }
    }

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Log in</h1>
                            <form method="POST" className="register-form" id='register-form'>

                                <div className="form-group">
                                     <label htmlFor="email">
                                         <i className="zmdi zmdi-email"></i>
                                     </label>
                                     <input type="email" value={values.email} onChange={handleInput} name='email'autoComplete='off'placeholder='Your email'/>
                                </div>
                               
                                <div className="form-group">
                                     <label htmlFor="password">
                                         <i className="zmdi zmdi-lock"></i>
                                     </label>
                                     <input type="password" value={values.password} onChange={handleInput} name='password'autoComplete='off'placeholder='Your password'/>
                                </div>
                                
                                <div className="form-button">
                                    <input type="submit" name='signin' id='signin'
                                     className='form-submit btn btn-primary'value="Log In"
                                     onClick={loginUser}/>
                                </div>
                                <div className="form-button">
                                  <NavLink to='/signup'>Don't have account</NavLink>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
