import Button from "./Button"

export default function CourseItem({id,description,onPress,image,title,price,label}){
    return (
        <div className="w-70 shadow-md p-8 flex flex-col space-y-4">
            <img src={image} className="w-1/2 self-center"/>
            <h2 className="font-bold">{title}</h2>
            <div className="font-light">
            {description}
            </div>
            <div className="font-bold">{price}</div>
            <Button to={onPress} label={label} color={'blue'}/>
        </div>
    )
    }