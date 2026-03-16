import { useParams } from "react-router-dom"

export default function Course(){
let {id} = useParams();

    return(
        <div>
            <div>course route</div>
            <div>Course {id}</div>
        </div>
    )
}