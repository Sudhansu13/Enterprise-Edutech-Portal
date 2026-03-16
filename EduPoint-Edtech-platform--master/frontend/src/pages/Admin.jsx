import { Link, Outlet,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Admin(){
const navigate = useNavigate();
    useEffect(()=>{
navigate('/admin/newcourse');
    },[])

    return (
        <div className='flex'>
        <div className='bg-blue-700 h-screen w-1/6 flex flex-col gap-4 items-center p-4 font-bold text-white'>
            <Link to='/admin/newcourse' className='hover:text-black'>New Course</Link>
            <Link to='/admin/courses' className='hover:text-black'>Courses</Link>
        </div>
        <Outlet/>
        </div>
    )
}