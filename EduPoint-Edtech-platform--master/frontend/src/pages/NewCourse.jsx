import { useState,useCallback } from "react"
import Image from '../components/Image';
import Button from '../components/Button';

export default function NewCourse(){
const [image,setimage] = useState();
const [title,setTitle] = useState();
const [desc,setdesc] = useState();
const [price,setprice] = useState();
const [imagefile,setimagefile] = useState();


async function senddata(){
    const formdata = new FormData();
    formdata.append('image',imagefile);
    formdata.append('title',title);
    formdata.append('description',desc);
    formdata.append('price',price);
    
    const response = await fetch('http://localhost:3001/admin/newcourse',{
        method:"POST",
        body:formdata
    })
    
    const data = await response.json();
    alert(data.msg);
    
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

    

    return (
        <div className="p-4 flex flex-col gap-4 ">
            <h2 className="font-medium text-2xl">Publish Course</h2>
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
            <Button to={senddata} label={'Submit'} color={'blue'} />
        </div>
    )
}