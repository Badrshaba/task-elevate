"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Input from "../form/Input";
import { useFormik } from "formik";
import Button from "../form/Button";
import * as yup from 'yup'
interface LoginFormValues {
    email: string;
  }

  const validationSchema=yup.object({
    email:yup.string().email().required('Email Must be provided.'),
  })
export default function VerifyCode() {
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  let form = useFormik<LoginFormValues>({
    initialValues:{
        email:'',
    },validationSchema,
    onSubmit:()=>console.log('submit')
    
  }
)
  return (
    <div className=" flex flex-col gap-8 justify-center items-center h-full ">
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit}
        className="  w-[35%] flex flex-col gap-6  "
      >
        <p className="font-semibold text-lg">Verify code</p>

        <Input placeholder={"Enter Email"} onBlur={form.handleBlur}  handleChange={form.handleChange} id="email" type={'email'}  value={form.values.email} error={form.errors.email} />

        <p className="text-xs text-[#122D9C]   text-end"><span className="text-black" >Didn’t receive a code? </span>Resend</p>

        <Button text="Sign in" />
      </form>
      <div className=" flex gap-3 items-center">
        <div className="divider h-[1px] bg-[#E7E7E7] w-12"></div>
        <p> or Continue with</p>
        <div className="divider  h-[1px] bg-[#E7E7E7] w-12"></div>
      </div>
      <div className="social-login flex gap-4">
        <div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Vector.png"} />
        </div>
        <div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Logo Google.png"} />
        </div>
        <div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Logo.png"} />
        </div>
        <div
          onClick={() => signIn("github", { callbackUrl: "/client" })}
          className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer"
        >
          <Image width={20} height={20} alt="google" src={"/Logo (1).png"} />
        </div>
      </div>
    </div>
  );
}
