import { useEffect, useState } from "react"
import { BACKEND_URL } from "../pages/config";
import axios from "axios";
export interface Post{
    "content": string,
    "id": number,
    "likeCount":number,
     "author":{
        "name":string,
     }
}
export const usePosts=()=>{
    const[loading,setLoading]=useState(true);
    const[posts,setPosts]=useState<Post[]>([]); 
    
    useEffect(()=>{
        const rawToken = localStorage.getItem("token");
        //@ts-ignore
        const parsedToken = JSON.parse(rawToken); 

            axios.get(`${BACKEND_URL}/post/bulk`,{
                headers:{
                    Authorization:parsedToken
                }
            })
            .then(response=>{
                setPosts(response.data.allPosts)
                console.log("data",response.data)
                setLoading(false);
            })
        
        
        
    },[])

    return {
        loading,
        posts
    }
}
export const usePost=({id}:{id:string})=>{
    const[loading,setLoading]=useState(true);
    const[post,setPost]=useState<Post>();
    useEffect(()=>{
        const rawToken = localStorage.getItem("token");
        //@ts-ignore
        const parsedToken = JSON.parse(rawToken); 
        
            axios.get(`${BACKEND_URL}/post/${id}`,{
                headers:{
                    Authorization: parsedToken
                }
            })
            .then(response=>{
                setPost(response.data.post)
                console.log("data",response.data)
                setLoading(false);
            })
        
        
        
    },[id]) 
    return {
        loading,
        post
    }
}