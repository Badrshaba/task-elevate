import Image from "next/image"
import logo from '../../public/Final Logo 1.png'
import { History, LayoutDashboard, LogOut } from "lucide-react"
import Style from './SidBar.module.css'
import Link from "next/link"
const SidBar = () => {
  return (
    <div className="flex flex-col gap-10 w-52   h-full " >
        <Image width={120} src={logo} alt={'logo'} />
        <div className="flex flex-col gap-6" >
        <Link href={'/'} className={Style.main_sidBar} ><span className={Style.icon} > <LayoutDashboard  /></span> <span>Dashboard</span> </Link>
        <p className="font-semibold text-lg text-FontColor w-fit flex gap-2 items-center hover:bg-Main hover:cursor-pointer hover:text-white px-2 rounded-lg py-1" >  <History className=" text-Main" /> <span>Quiz History</span> </p>
        <p className="font-semibold text-lg text-FontColor  w-fit flex gap-2 items-center hover:bg-Main hover:cursor-pointer hover:text-white px-2 rounded-lg py-1" > <LogOut className=" text-Main" /> <span>Log Out</span> </p>

        </div>
    </div>
  )
}

export default SidBar