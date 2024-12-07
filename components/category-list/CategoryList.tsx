import Image from "next/image";
import quiz from "../../public/quize.jpg";
import { useRouter } from "next/navigation";
const CategoryList = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl w-fit m-auto p-4" >
        <h3 className=" text-Main py-2 text-2xl font-medium" >Quize</h3>
        <div className="flex flex-wrap gap-4" >
      <div
        style={{
          backgroundImage: `url(/quize.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:292.65,
          width: 330.17,
          borderRadius:8.44,
          position:"relative"
        }}
        onClick={()=>router.push('/select-diploma')}
      >

        <div className=" bg-[#1935CA66]  w-72 h-16 rounded-lg absolute bottom-5 right-5 " >
            <p className="text-white font-semibold text-base pl-2 pt-3 z-10" >Front-end Web Development</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(/quize.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:292.65,
          width: 330.17,
          borderRadius:8.44,
          position:"relative"
        }}
      >

        <div className=" bg-[#1935CA66]  w-72 h-16 rounded-lg absolute bottom-5 right-5 " >
            <p className="text-white font-semibold text-base pl-2 pt-3 z-10" >Front-end Web Development</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(/quize.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:292.65,
          width: 330.17,
          borderRadius:8.44,
          position:"relative"
        }}
      >

        <div className=" bg-[#1935CA66]  w-72 h-16 rounded-lg absolute bottom-5 right-5 " >
            <p className="text-white font-semibold text-base pl-2 pt-3 z-10" >Front-end Web Development</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default CategoryList;
