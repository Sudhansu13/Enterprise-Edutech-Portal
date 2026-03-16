import { useParams} from "react-router-dom"
import { useState } from "react";
import Button from "../components/Button";
import Image from '../components/Image'
import axios from "axios";

export default function EditCourse(){
const [image,setimage] = useState();
const [title,setTitle] = useState();
const [desc,setdesc] = useState();
const [price,setprice] = useState();
const [imagefile,setimagefile] = useState();
const {id} = useParams();

async function senddata(){
    const formdata = new FormData();
    formdata.append('image',imagefile);
    formdata.append('title',title);
    formdata.append('description',desc);
    formdata.append('price',price);
    
    const response = await fetch('http://localhost:3001/admin/editDetails/'+id,{
        method:"PUT",
        body:formdata
    })
    
    const data = await response.json();
    alert(data.msg);
    
}

async function deletecourse(){
    const response = await axios.delete('http://localhost:3001/admin/editDetails/delete/'+id);
    console.log(response.data);
    alert(response.data.msg);
}

    function saveimage(e){
        let input = e.target;
        setimagefile(input.files[0]);
        if(input.files && input.files[0]){
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (e){
                setimage(e.target.result);
            }
        }
    }


    return(
        <div className="p-4 flex flex-col gap-4 ">
            <h2 className="font-medium text-2xl">Edit Course</h2>
            <input type="text" placeholder="Title of the course" onChange={(e)=>{
                setTitle(e.target.value);
            }}></input>
            <textarea type="text" placeholder="Description of the course" onChange={(e)=>{
                setdesc(e.target.value)
            }}></textarea>
            <input type="text" placeholder="Price of the course" onChange={(e)=>{
                setprice(e.target.value);
            }}></input>
            <label for="image" >Enter the image</label>
            <div className="flex gap-4">
                <input type="file" id="image" name="image" onChange={saveimage} accept="image/*"/>
                {
                    <Image src={image} alt={"course"}/>
                }
            </div>
            <Button to={senddata} label={'Submit'} color={'blue'}/>
            <Button  to={deletecourse} label={'Delete'} color={'red'}/>
        </div>
    )
}