import { Viewpost } from "./Viewpost"
import { usePosts } from "../hooks"
export const Posts=()=>{
    const {loading,posts}=usePosts();
   
    
    return <div className="flex flex-col-reverse divide-y divide-y-reverse divide-slate-700 h-screen overflow-auto ">
       {
        posts.map(post=> 
            <Viewpost name={post.author.name} id={post.id} title={post.content} 
             likeCount={post.likeCount} ></Viewpost>
            
            )
       }
      
        
    </div>
}