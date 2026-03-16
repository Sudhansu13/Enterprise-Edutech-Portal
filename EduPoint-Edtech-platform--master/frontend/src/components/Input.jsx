export default function Input({label,onchange}){
    return(
        <input placeholder={label} onChange={onchange} className="p-2 border border-black-400"/>
    )
}