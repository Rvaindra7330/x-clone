import { useParams } from "react-router-dom";
import { SearchBar } from "../components/Searchbar"
import { SideBar } from "../components/Sidebar"
import { Viewpost } from "../components/Viewpost"
import { usePost } from "../hooks";

export const Post=()=>{
   const { id }= useParams();
  const {loading,post}=usePost({id:id||""});
  
     return<div className="grid grid-cols-12 bg-black divide-x divide-slate-800">
     <div className="col-span-3  ">
       <div className="fixed top-0 left-0 h-full w-1/4"><SideBar></SideBar></div>
       
     </div>
     {post?<div className="col-span-6  ml-1/4">
     <Viewpost name={post.author.name} id={post.id}  title={post.content} likeCount={post.likeCount}  ></Viewpost>
     
     </div>:null}
     
     <div className="col-span-3">
       <SearchBar></SearchBar>
       
     </div>
 
   </div>
     
}