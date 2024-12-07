'use client'

import CategoryList from "@/components/category-list/CategoryList";
import SidBar from "@/components/sidbar/SidBar";

export default function Home() {
  const logOut = () => {
console.log("domr");

  }
  return (
   <div className="h-screen bg-[#FBF9F9] flex p-6" >
    <SidBar/>
    <div className="h-full w-full" >
    <CategoryList/>
    </div>
    {/* <h1 className="text-4xl font-bold " >Home</h1>
    <button className="bg-red-600 text-white font-light text-sm  p-3 rounded-2xl" onClick={logOut}  > log out </button> */}
   </div>
  );
}
