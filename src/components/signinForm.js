import React from 'react';


const SignInForm = ({ handleForm }) => {
    return (<form onSubmit ={ handleForm }>
      <label>Email</label>
      <input
      type='email'
      id='email'
      placeholder='crisis@gmail.com'
      ></input>

      <label>Password</label>
      <input
      type='password'
      id='password'
      placeholder=''
      ></input>

      <input
        id='submit_form'
        type="submit"
        value="Submit"
      ></input>
  	</form>
  	)
  }
  export default SignInForm