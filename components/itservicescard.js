import Link from "next/link";
function Itservicescard({name,icon,description,id}) {
    return(
      <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className=" border-gray-200 p-6 rounded-lg">
        <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
          {icon}
        </div>
        <h2 className="text-lg text-white text-center  mb-2">
          
          {name}
        </h2>
        <p className="leading-relaxed text-white text-center">
       {description}
        </p>
        <div className="flex justify-center">
                    <Link href={"/solution/itsevices"}>
                      <p className="text-white  p-2 font-bold ease-in duration-300 rounded-md hover:text-black hover:bg-orange  flex justify-center items-center text-left hover:cursor-pointer">
                       Learn More
                      </p>
                    </Link>
                  </div>
      </div>
    </div>

    )
}
export default Itservicescard;