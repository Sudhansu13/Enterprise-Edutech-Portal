import { useEffect, useState } from "react";
import CourseItem from "../components/CourseItem";
import axios from "axios";

export default function Purchased(){
const [courses,setcourses] = useState([])

useEffect(()=>{
    async function getcourses(){
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/user/purchasedcourses',{
            headers:{
                'authorization':'Bearer '+token
            }
        });
        setcourses(response.data.msg);
    }
    getcourses();
},[])

    return (
        <div className="grid grid-cols-4 p-3 gap-3">
            {
                courses.map((course)=>{
                    return <CourseItem key={course._id} title={course.title} price={course.price} description={course.description} image={course.image} label={'View content'}/>
                })
            }
        </div>
    )
}