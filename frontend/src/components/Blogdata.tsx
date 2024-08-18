import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const  Blogdata = ({ blog } : { blog  : Blog }) => {
    return <div>
          <Appbar/>
          <div className= "flex justify-center">
                <div className="grid grid-cols-12 px-20 w-full pt-200 max-w-screen-2xl pt-12 ">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                    <div className="pt-4 text-sm font-light text-slate-400">
                           post on 17 Aug 2024
                        </div>
                        <div className="pt-4 pr-4 text-lg">
                            {blog.content}
                        </div>
                    </div>
                    <div className=" col-span-4 pt-5 ml-8 ">
                    <div className="text-slate-900 font-medium text-lg"> 
                           Author
                         </div>

                        <div className="flex  ">
                        <div className="pt-4 pr-4 content-center  ">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                        
                            <div>
                                    <div className="text-3xl font-bold pt-2">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="pt-2 text-base font-medium text-gray-500">
                                        "Dedicated to healing with heart and expertise."
                                        "Making a difference, one patient at a time."
                                        "Caring hands, compassionate heart."
                                        "Committed to your well-being."
                                        "Where medicine meets compassion."

                                    </div>
                            </div>
                        </div>
                       
                        
                    </div>
               </div>
        </div>
    </div>

}