import { useState, useEffect } from "react";
import { Logo_15,FormRow_15, Alert_15 } from "../components";
import Wrapper from "../assets/wrappers/Register_15";

import {useAppContext} from '../context/appContext_15';
import { useNavigate } from 'react-router-dom';

const initialState={
    name:"",
    email: '',
    password:'',
    isMember:true,
}

const Register_15 = () => {
    const [values,setValues]=useState(initialState);
    const navigate = useNavigate();
    
    const { user, isLoading,showAlert, displayAlert, registerUser, loginUser}= useAppContext();

    const toggleMember = () => {
      setValues( {...values, isMember: !values.isMember });
    };
    const handleChange=(e)=>{
        //console.log('e.target',e.target);
        setValues({...values,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        const {name, email, password, isMember} = values;
        //console.log('e.target',e.target);
        if(!email || !password || (!isMember && !name)){
          displayAlert();
          return;
        }

        const currentUser = {name, email, password};
        console.log('from data', currentUser);
        if(!isMember){
          registerUser({
            currentUser,
            endPoint: 'register_15',
            alertText:'User created! Redirecting...'
          });
        }else{
          loginUser({
            currentUser,
            endPoint: 'login_15',
            alertText:'Login Successful! Redirecting...'
        });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);
  
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
    <Logo_15/>
    <h3> {values.isMember? 'Login': 'Register'} </h3>
    {showAlert && <Alert_15/>}
    {/* name input*/}
    {!values.isMember && (
      <FormRow_15
      type="text"
      name='name'
      value={values.name}
      handleChange={handleChange}
      className='form-input'
     />
    )}
    {/* email input */}
     <FormRow_15
     type="email"
     name='email'
     value={values.email}
     handleChange={handleChange}
     className='form-input'
    />
      <FormRow_15
     type="password"
     name='password'
     value={values.password}
     handleChange={handleChange}
     className='form-input'
    />

   <button className='btn btn-block' type="submit">
       submit
   </button>
   <p>
     {values.isMember ? 'Not a member yet>' : 'Already a member?'}
     <button type='button' className="member-btn" onClick={toggleMember}>
       {values.isMember? 'Register' : 'Login'}

     </button>
     </p>
      </form>
    </Wrapper>
  )

}
export default Register_15
