import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function AdminLogin(){
    return (
        <div>
        <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col w-1/4 border border-black-500 gap-4 p-8 py-10">
      <Input label={"Email address"}/>
  <Input label={"password"}/>
  <Button label={"Login"}/>
  </div>
  </div>
  </div>
    )
}