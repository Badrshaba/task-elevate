"use client"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
interface InputProps {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
    id:string
    onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: boolean;
    error?: string;
  }


export default function Input ({value,handleChange,type='text',id,onBlur,placeholder,icon=false,error}:InputProps) {
    const [showPassword,setShowPassword] = useState(false)

  return<div>
  <div className=" relative" >
  <input
          type={showPassword?'text':type}
          className={`w-full shadow-lg border-2 p-2 rounded-lg ${error?'border-red-500':'focus-visible:out'}`}
          placeholder={placeholder}
           value={value}
           id={id}
           onChange={handleChange}
           onBlur={onBlur}
          autoComplete="off"
        />
        {showPassword?<EyeOff color="gray" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>setShowPassword(false)}/>:icon&&<Eye onClick={()=>setShowPassword(true)} color="gray" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />}
  </div>
       {error&&<p className="text-red-500 font-semibold text-sm px-2 mt-1">{error}</p>}
  </div>
  
}