import Main from "@/components/Main-Layout/Main"
import SelectQuiz from "@/components/select-quiz/SelectQuiz"


const page = () => {
  return (
    <div>
      <Main>
        <h3>Front-End Quiz</h3>
        <div className="flex flex-col gap-4" >
<SelectQuiz/>
<SelectQuiz/>
<SelectQuiz/>
<SelectQuiz/>
<SelectQuiz/>
<SelectQuiz/>
<SelectQuiz/>
        </div>
      </Main>

    </div>
  )
}

export default page