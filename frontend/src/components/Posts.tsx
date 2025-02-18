import { Viewpost } from "./Viewpost"
import { usePosts } from "../hooks"
import { Skeleton } from "./Skeleton";
export const Posts=()=>{
    const {loading,posts}=usePosts();
   
    if(loading){
        return <div className="flex flex-col-reverse divide-y divide-y-reverse divide-slate-700 h-screen ">
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
        </div>
       
    }
    return <div className="flex flex-col-reverse divide-y divide-y-reverse divide-slate-700 h-screen ">
       {
        posts.map(post=> 
            <Viewpost name={post.author.name} id={post.id} title={post.content} 
             likeCount={post.likeCount} ></Viewpost>
            
            )
       }
      
        
    </div>
}