import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Log in</h1>
                            <form className="register-form" id='register-form'>

                                <div className="form-group">
                                     <label htmlFor="email">
                                         <i class="zmdi zmdi-email"></i>
                                     </label>
                                     <input type="email" name='email'autoComplete='off'placeholder='Your email'/>
                                </div>
                               
                                <div className="form-group">
                                     <label htmlFor="password">
                                         <i class="zmdi zmdi-lock"></i>
                                     </label>
                                     <input type="password" name='password'autoComplete='off'placeholder='Your password'/>
                                </div>
                                
                                <div className="form-button">
                                    <input type="submit" name='signin' id='signin' className='form-submit btn btn-primary'value="Log In"/>
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
