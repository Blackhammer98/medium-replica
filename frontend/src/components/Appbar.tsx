import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export  const Appbar = () => {

    return <div className="flex justify-between border-b px-10 py-4">
            <Link to={"/blogs"}>
            <div className="flex flex-col font-bold text-3xl pt-2 cursor-pointer">
                Medium
            </div>
        </Link>
            <div className="pt-2">
                <Link to={`/publish`}>
            <button type="button" className="mr-8 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500
             font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-20
             ">New</button>
            </Link>
             <Avatar size={"big"} name="Nikit" />
            </div>
        </div>
        
}
