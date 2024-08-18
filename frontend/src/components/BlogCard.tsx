import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName : string ;
    title : string;
    content  : string ; 
    publishedDAte : string
    id : string;
}


export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDAte 

}:BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
     <div className=" border-b border-slate-200 pb-3 mt-10 mb-4 cursor-pointer ">
        <div className="flex  ">
            
                <Avatar name={authorName} />
                <div className="font-normal  ml-1 flex justify-center flex-col text-sm">
                {authorName}
            </div>  
                <div className=" pl-1 flex justify-center flex-col">
                   <Circle/>
            </div>
                <div className=" pl-1 flex justify-center flex-col font-thin text-sm text-slate-400">
                 {publishedDAte}
            </div>
            
        </div>
        <div className="text-xl font-bold">
            {title}
        </div>
        <div className="text-base font-normal">
            {content.slice(0, 100) + "...."} 
        </div>
        <div className="text-gray-500 font-thin text-sm pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
    </Link>
}
export function Circle (){
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size = "small" }: { name: string, size ?: "small" | "big" }) {
        
    return <div className={`relative inline-flex items-center justify-center 
   ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="font-normal text-gray-600 dark:text-gray-300">
            {name[0]}
        </span>
    </div>

}  