import React, {useState} from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true)

  return (
       <div className="app">
    <div className='auth'>
        <section>
            <article>
                <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        {isSignUp && <input type='text' placeholder='Full Name'/>}
        <input type="email" placeholder='Email Address'/>
        <input type="password" placeholder='Password'/>
         {isSignUp && <input type="password" placeholder='Confirm Password'/>}
         {
             !isSignUp && (<p>Forgot Password?</p>)
         }
         {/* {isSignUp ? (
             <div className='checker-section'>
             <input type="checkbox" name="" id="" /> <span>I agree to the <a href='#'>Terms & Conditions</a></span>
             </div>
         ) : (
              <div className='checker-section'>
             <input type="checkbox" name="" id="" /> <span>Remember me</span>
             </div>
         )} */}
         <Link to={`/dashboard`}>
         <button >{isSignUp ? 'Create Account' : 'Sign In'}</button>
         </Link>
            </article>
            {isSignUp ? (
                <p>
                    Already have an account? <span className='underliner' onClick={()=>setIsSignUp(!isSignUp)}>Sign in here</span>
                </p>
            ) : (
                <p>
                    Don't have an account? <span className='underliner' onClick={()=>setIsSignUp(!isSignUp)}>Sign up here</span>
                </p>
            )}
        </section>
    </div></div>
  )
}

export default Auth