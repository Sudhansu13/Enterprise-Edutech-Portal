import { useEffect, useState } from "react"
import CourseItem from "../components/CourseItem";
import axios from 'axios';

export default function Courses(){
const[Courses,setcourses] = useState([]);

useEffect(()=>{
    async function tofetch(){
        const response = await axios.get('http://localhost:3001/user/courses')
        setcourses(response.data.courses);
    }
    tofetch()
},[])

async function purchasehandler(id){
    const token = localStorage.getItem('token');
    console.log(token);
  const response = await axios.patch('http://localhost:3001/user/courses/'+id,{},{
    headers:{
        'authorization':`Bearer ${token}`
    }
  })
    alert(response.data.msg);
}

    return (
        <div className="grid grid-cols-4 p-4 gap-3">
            {(Courses.length?(
                Courses.map((course)=>{
                    return <CourseItem key={course._id} title={course.title} price={course.price} description={course.description} image={course.image} label={'Purchase'} onPress={(e)=>{
                        purchasehandler(course._id);
                    }}/>
                })
            ): (<div className="text-center">No courses available</div>)
            )
            }
        </div>
    )
}

