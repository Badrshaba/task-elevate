import Image from "next/image"
import quiz from "../../public/Group.png"
const SelectQuiz = () => {
  return (
    <div className="flex gap-4 w-full shadow-md rounded-2xl p-4">
        <Image src={quiz} alt="quiz" />
        <div className=" flex justify-between items-center w-full" >
        <div>
          <h3 className="text-xl font-medium">Html</h3>
          <p className="text-sm text-gray-500" >20 Question</p>
        </div>
        <div>
          <h3 className="text-base font-normal">15 Minutes</h3>
          <p className="text-sm bg-Main text-center text-white rounded-lg hover:cursor-pointer" >Start</p>
        </div>
        </div>
    </div>
  )
}

export default SelectQuiz