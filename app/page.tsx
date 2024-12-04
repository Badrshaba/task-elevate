'use client'
export default function Home() {
  const logOut = () => {
console.log("domr");

  }
  return (
   <div className="flex flex-col justify-center items-center h-screen" >
    <h1 className="text-4xl font-bold " >Home</h1>
    <button className="bg-red-600 text-white font-light text-sm  p-3 rounded-2xl" onClick={logOut}  > log out </button>
   </div>
  );
}
