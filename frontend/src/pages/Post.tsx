import { SearchBar } from "../components/Searchbar"
import { SideBar } from "../components/Sidebar"
import { Viewpost } from "../components/Viewpost"

export const Post=()=>{
     return <div className="grid grid-cols-12 bg-black divide-x divide-slate-800">
        <div className="col-span-3  ">
          <div className="fixed top-0 left-0 h-full w-1/4"><SideBar></SideBar></div>
          
        </div>
        <div className="col-span-6">
        <Viewpost name={"hi"} id={"fjkf"}  title={"efnwe"} likeCount={"ebf"}  ></Viewpost>
        </div>
        <div className="col-span-3">
          <SearchBar></SearchBar>
          
        </div>
    
      </div>
     
}