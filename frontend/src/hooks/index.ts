import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "title" : string;
    "content" : string;
    "id": string;
    "author" : {
        "name" : string
    }
}
interface UseBlogsReturn {
    loading: boolean;
    blogs : Blog[];

}
export const useBlog = ({ id } : {id : string}) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [blog, setBlog] = useState<Blog>()


    useEffect(() => {
        const token = (localStorage.getItem("token"))
        console.log("Retrieved token:", token); // Log the token to verify
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `${token}`
            }
        })
            .then(response => {

                setBlog(response.data.blog)
                setLoading(false)

            })
    }, [id])

    return { loading, blog }
}
export const useBlogs = (): UseBlogsReturn => {
    const [loading , setLoading]  = useState<boolean>(true);
    const [blogs, setBlogs] = useState<Blog[]>([])


    useEffect(()=>{
        const token = (localStorage.getItem("token"))
        console.log("Retrieved token:", token); // Log the token to verify
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
              Authorization : `${token}`
            }
        })
        .then(response =>{

            setBlogs(response.data.blogs)
            setLoading(false)

        })
    },[])

    return {loading , blogs}
} 

