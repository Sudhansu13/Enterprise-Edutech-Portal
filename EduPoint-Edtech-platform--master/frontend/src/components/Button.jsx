 import{Link} from 'react-router-dom'
 
 export default function Button({label,to,color}){
    return (
        <button onClick={to} className={`py-2 px-6 text-white bg-${color}-700 rounded-full text-center`}>{label}</button>
    )
}