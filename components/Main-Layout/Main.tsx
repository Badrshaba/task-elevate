import { ReactNode } from "react"
import SidBar from "../sidbar/SidBar"
import Header from "../Header/Header"


const Main = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex p-6 bg-[#FBF9F9]" >
        <SidBar/>
        <div>
        <Header/>
        {children}
        </div>
    </div>
  )
}

export default Main