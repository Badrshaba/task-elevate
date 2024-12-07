import Image from "next/image"
import Avatar from '../../public/Avatar_2.jpg'
import { Search } from "lucide-react"
const Header = () => {
  return (
    <div className="flex justify-between mb-6 gap-3" >
        <div className=" relative" >
        <input type="text" className=" w-[762px] bg-white h-[61px] rounded-2xl pl-16 shadow-lg focus-visible:outline-none" placeholder="Search Quiz" />
        <Search className=" absolute left-4 top-8 transform -translate-y-1/2 text-Main"/>
        </div>
        <button className=" bg-Main text-white font-semibold text-xl  p-3 rounded-2xl w-[191px] h-[61px] " >Start Quiz</button>
        <div style={{backgroundImage: `url(/Avatar_2.jpg)`, backgroundSize: "cover", backgroundPosition: "center", height:61, width: 61, borderRadius:61}} />  
    </div>
  )
}

export default Header