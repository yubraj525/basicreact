import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
export default function Login() { // Capitalized 'Login'
  return (
<>
<div><Navbar/></div>
<div div className="box-1">

<div className="box-2">
      <Link to="/">
        <button className="button">Apply Now</button>
      </Link>
    </div>

<form className="form_container">
  <div className="logo_container"></div>
  <div className="title_container">
    <p className="title">Login to your Account</p>
    <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
  </div>
  <br />
  <div className="input_container">
    <label className="input_label" htmlFor="email_field">Email</label>
    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
      <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" />
      <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" />
    </svg>
    <input placeholder="name@mail.com" title="Input title" name="input-name" type="text" className="input_field" id="email_field" />
  </div>
  <div className="input_container">
    <label className="input_label" htmlFor="password_field">Password</label>
    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
      {/* The rest of the SVG path here */}
    </svg>
    <input placeholder="Password" title="Input title" name="input-name" type="password" className="input_field" id="password_field" />
  </div>
  <button title="Sign In" type="submit" className="sign-in_btn">
    <span>Sign In</span>
  </button>

  <div className="separator">
    <hr className="line" />
    <span>Or</span>
    <hr className="line" />
  </div>

  <button title="Sign In" type="submit" className="sign-in_ggl">
    <svg height="18" width="18" viewBox="0 0 32 32">
      {/* The SVG path for Google logo */}
    </svg>
    <span>Sign In with Google</span>
  </button>

  <button title="Sign In" type="submit" className="sign-in_apl">
    <svg preserveAspectRatio="xMidYMid" version="1.1" viewBox="0 0 256 315" height="20px" width="16px">
      {/* The SVG path for Apple logo */}
    </svg>
    <span>Sign In with Apple</span>
  </button>
  <p className="note">Terms of use &amp; Conditions</p>
</form>
</div>
</>
  );
}
