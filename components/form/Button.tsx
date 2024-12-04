import { HtmlHTMLAttributes } from "react";

export default function Button ({text ,disabled}:{text:string,disabled?:boolean}) {
    return         <button
    disabled={disabled?disabled:false}
    type="submit"
    className="bg-[#4461F2] text-white font-light text-sm w-full p-3 rounded-2xl"
  >
    {" "}
    {text}
  </button>
}