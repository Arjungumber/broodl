'use client'
import React,{useState} from "react";
import { Fugaz_One, Inter } from "next/font/google";
import Button from "./Button";
import useAuth from "@/context/AuthContext";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isRegister,setIsRegister] = useState(false);
  const[authenticating,setAuthenticating] = useState(false);
  const {signup,login} = useAuth();

 async function handleSubmit(){
  if(!email || !password || password.length <6){
   return 
  }
  setAuthenticating(true);
  try {
    if(isRegister){
      console.log("Signing up a new user");
      await signup(email,password);
   } else{
     console.log("Logging in existing user");
     await login(email,password);
   }
  } catch (error) {
    console.log(error.message);
  }
  finally{
    setAuthenticating(false);
  }
  

 }

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        { isRegister ? 'Resgister' : 'Login'}
      </h3>
      <p>You&#39;re one step away!</p>
      <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600  py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <div className="max-w-[400px] w-full mx-auto ">
        <Button clickHandler={handleSubmit} text={authenticating ? "Submitting":"Submit"} full />
      </div>
      <p className="text-center">
        { isRegister ? 'Already have an account?  ' : 'Don\'t have an account? ' }
        <button onClick={()=>setIsRegister(!isRegister)} className="text-indigo-600">{isRegister ? 'Sign in' : 'Sign up'}</button>
      </p>
    </div>
  );
};

export default Login;
