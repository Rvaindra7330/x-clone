export const SearchBar=()=>{
    return <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    <input
      type="text"
      placeholder="Search"
      className="bg-transparent focus:outline-none text-base  text-white w-full pl-4"
    />
  </div>
}