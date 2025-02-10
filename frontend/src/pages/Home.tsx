import { SearchBar } from "../components/Searchbar"
import { SideBar } from "../components/Sidebar"
import { Posts } from "../components/Posts"

export const Home=()=>{
    return <div >
       <div className="grid grid-cols-12 bg-black divide-x divide-slate-800 min-h-screen ">
    <div className="col-span-3  ">
      <div className="fixed top-0 left-0 h-full w-1/4"><SideBar></SideBar></div>
      
    </div>
   
    <div className="col-span-5 ml-1/4  h-screen">
    <Posts></Posts>
    </div>
    <div className="col-span-4 ml-1/4  h-screen">
      <SearchBar></SearchBar>
      
    </div>
    
    
    
    

  </div>
    </div>
}