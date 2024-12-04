"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useFormik } from "formik";
import Input from "../form/Input";
import * as yup from 'yup'
import Button from "../form/Button";
import { api } from "@/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface registerFormFields{
  firstName:string,
  lastName:string,
  username:string,
  email:string,
  phone:string,
  password:string,
  rePassword:string,
}

const validationSchema=yup.object({
  username: yup.string()
  .matches(/^[A-Za-z]+$/, 'Username must contain only letters')
  .min(4, 'Username must be at least 4 characters')
  .max(25, 'Username must be less than 25 characters')
  .required('Username is required'),
firstName: yup.string()
  .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
  .required('First name is required'),
lastName: yup.string()
  .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
  .required('Last name is required'),
email: yup.string()
  .email('Invalid email address')
  .required('Email is required'),
  phone: yup.string()
   .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
  .required('Phone number is required'),
password: yup.string()
  .min(6, 'Password must be at least 6 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/\d/, 'Password must contain at least one number')
  .required('Password is required'),
rePassword: yup.string()
  .oneOf([yup.ref('password')], 'Passwords must match')
  .required('Confirm Password is required'),
}
)

export default function RegisterForm() {
  const router = useRouter()
  const form=useFormik<yup.InferType <typeof validationSchema>>({
    initialValues:{
      username:"",
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      password:"",
      rePassword:"",
    }, validationSchema,
    onSubmit:handleSubmit,


    

  })

async  function handleSubmit (formData:registerFormFields){
  try {
    const {data} = await api.post('/signup',formData)
    console.log(data);
    toast.success('success register');
    router.push('/signin')
    
  } catch (error:any) {
    console.log(error);
    toast.error(error?.response?.data?.message || 'Something went wrong')
  }
    


  };
  
  return (
    <div className=" flex flex-col gap-8 justify-center items-center h-full ">
      <form onSubmit={form.handleSubmit} className="  w-[35%] flex flex-col gap-6">
        <p className="font-semibold text-lg">Sign in</p>
<Input handleChange={form.handleChange} value={form.values.username} id="username" onBlur={form.handleBlur} placeholder="Username" type="text" error={form?.errors?.username}/>
<Input handleChange={form.handleChange} value={form.values.firstName} id="firstName" onBlur={form.handleBlur} placeholder="First Name" type="text" error={form?.errors?.firstName}/>

<Input handleChange={form.handleChange} value={form.values.lastName} id="lastName" onBlur={form.handleBlur} placeholder="Last Name" type="text" error={form?.errors?.lastName}/>

<Input handleChange={form.handleChange} value={form.values.email} id="email" onBlur={form.handleBlur} placeholder="Email" type="email" error={form?.errors?.email}/>
<Input handleChange={form.handleChange} value={form.values.phone} id="phone" onBlur={form.handleBlur} placeholder="Phone" type="phone" error={form?.errors?.phone}/>
<Input handleChange={form.handleChange} value={form.values.password} id="password" onBlur={form.handleBlur} placeholder="Password" type="password" error={form?.errors?.password} icon={true}/>
<Input handleChange={form.handleChange} value={form.values.rePassword} id="rePassword" onBlur={form.handleBlur} placeholder="Confirm Password" type="password" error={form?.errors?.rePassword} icon={true}/>

        

      
        <p className="text-sm text-center tracking-widest">
          Already have an account?{" "}
          <Link className="text-[#4461F2]  " href={"/login"}> Login </Link>
        </p>
       <Button text="Create Account" />
      </form>
      <div className="social-login flex gap-4">
        <div className="login-item flex justify-center hover:shadow-lg items-center border p-3 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Vector.png"} />
        </div>
        <div className="login-item flex justify-center hover:shadow-lg items-center border p-3 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Logo Google.png"} />
        </div>
        <div className="login-item flex justify-center hover:shadow-lg items-center border p-3 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Logo.png"} />
        </div>
        <div
          onClick={() => signIn("github", { callbackUrl: "/client" })}
          className="login-item flex justify-center hover:shadow-lg items-center border p-3 shadow-md rounded-lg cursor-pointer"
        >
          <Image width={20} height={20} alt="google" src={"/Logo (1).png"} />
        </div>
      </div>
    </div>
  );
}
