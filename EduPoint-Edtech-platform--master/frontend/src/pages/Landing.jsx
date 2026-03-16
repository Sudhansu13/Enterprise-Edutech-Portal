import {Link, Outlet, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import axios from 'axios'

export default function Landing(){
const[user,setuser] = useState(0);

useEffect(()=>{
async function checktoken(){
    const token = localStorage.getItem('token');
    if(token){
        const response = await axios.get('http://localhost:3001/user/me',{
            headers:{
                'authorization':`Bearer ${token}`
            }
        });
        if(response.data.user){
            setuser(1);
        }
    }
    navigate('/home')
}
checktoken()
},[])

const navigate = useNavigate();


    return (
        <div>
            <div className="py-4 px-8 shadow-md flex justify-between items-center">
            <span className='text-blue-700 basis-1/4'>100X</span>
            <div className='flex justify-between basis-1/4 items-center'> 
            <Link to='/home'>Home</Link>
            <Link to='/courses'>Courses</Link>
            {
                user?(<div>
                   <Link to='/purchasedcourses' className='mr-2'>Purchased</Link>
                    <Button label={'LogOut'} to={()=>{
                        localStorage.removeItem('token');
                        window.location.reload()}} color={'blue'}/>
                    </div>
                ):(
                    <div>
                    <Button to={()=>{
                        navigate("/signup")
                    }} label={'Signup'} color={'blue'}/>
                    <Button to={()=>{
                        navigate("/login")
                    }} label={'Login'} color={'blue'}/>
                    </div>
                )
            }
            </div>
            </div>


            <Outlet/>
        </div>
    )
}