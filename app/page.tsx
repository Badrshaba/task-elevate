"use client"
import CategoryList from "@/components/category-list/CategoryList";
import Main from "@/components/Main-Layout/Main";


export default function Home() {
  return (
   <div className="h-screen bg-[#FBF9F9] flex" >
    <Main>
    <div className="h-full w-full" >
    <CategoryList/>
    </div>
    </Main>
   </div>
  );
}
