import {Search} from 'lucide-react'
export const SearchBar=()=>{
    return <div className="flex items-center  rounded-full px-4 py-2  ">
    <Search size={30}/>

    <input
      type="text"
      placeholder="Search"
      className="bg-transparent focus:outline-none text-base  text-white w-full pl-4"
    />
  </div>
}