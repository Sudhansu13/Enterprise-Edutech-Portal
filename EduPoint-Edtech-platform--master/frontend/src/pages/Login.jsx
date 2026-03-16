import Button from "../components/Button";
import { Link,useNavigate } from "react-router-dom";
import Input from '../components/Input'
import { useState } from "react";
import axios from 'axios';


export default function Login(){
const[email,setemail] = useState();
const[password,setpassword] = useState();
const navigate = useNavigate();

async function loginhandler(){
    const response = await axios.post('http://localhost:3001/user/login',{
        email:email,
        password:password
    })
    if(response.data.token){
    localStorage.setItem('token',response.data.token);
    alert('user loged in');
    navigate('/home');
    window.location.reload();
    }else{
        alert(response.data.msg);
    }
}

    return (
        <div>
              <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col w-1/4 border border-black-500 gap-4 p-8 py-10">
            <Input label={"Email address"} onchange={(e)=>{
                setemail(e.target.value);
            }}/>
        <Input label={"password"} onchange={(e)=>{
            setpassword(e.target.value)
        }}/>
        <Button label={"Login"} to={loginhandler} color={'blue'}/>
        <div className="flex flex-row">
        <p>Don't have an account?</p>
        <Link to='/signup' className="text-blue-400 font-bold">Signup</Link>
        </div>
        </div>
        </div>
        </div>
    )
}