"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Input from "../form/Input";
import { useFormik } from "formik";
import Button from "../form/Button";
import * as yup from 'yup'
interface LoginFormValues {
    password: string;
    rePassword: string;
  }

  const validationSchema=yup.object({
      password:yup.string().required("Pasword is Required."),
      rePassword:yup.string().email().oneOf([yup.ref('password')]).required('rePassword Must be provided.'),
  })
export default function SetPassword() {
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  let form = useFormik<LoginFormValues>({
    initialValues:{
        password:'',
        rePassword:'',
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
        <p className="font-semibold text-lg">Set a Password</p>

        <Input placeholder={"Password"} onBlur={form.handleBlur}  handleChange={form.handleChange} id="password" type={'password'} value={form.values.password} icon={true} error={form.errors.password}/>
        <Input placeholder={"Re-enter password"} onBlur={form.handleBlur}  handleChange={form.handleChange} id="email" type={'password'}  value={form.values.rePassword} error={form.errors.rePassword} />

        <p className="text-xs text-[#122D9C]   text-end">Recover Password ?</p>

        <Button text="Sign in" />
      </form>
      <div className=" flex gap-3 items-center">
        <div className="divider h-[1px] bg-[#E7E7E7] w-12"></div>
        <p> or Continue with</p>
        <div className="divider  h-[1px] bg-[#E7E7E7] w-12"></div>
      </div>
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
