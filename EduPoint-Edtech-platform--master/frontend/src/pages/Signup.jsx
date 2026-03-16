import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Signup(){
const[email,setemail] = useState();
const[password,setpassword] = useState();


async function signuphandler(){
const response = await axios.post('http://localhost:3001/user/signup',{
    email:email,
    password:password
})
alert(response.data.msg)
}

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col w-1/4 border border-black-500 gap-4 p-8 py-10">
        <Input label={"Email address"} onchange={(e)=>{
            setemail(e.target.value);
        }}/>
        <Input label={"password"} onchange={(e)=>{
            setpassword(e.target.value);
        }}/>
        <Button label={"Sign Up"} to={signuphandler} color={'blue'}/>
        <div className="flex flex-row">
        <p>Have an account?</p>
        <Link to='/login' className="text-blue-400 font-bold">Login</Link>
        </div>
        </div>
        </div>
        
    )
}