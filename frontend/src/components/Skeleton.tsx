export const Skeleton=()=>{
    return  <div>
    <div className="grid grid-cols-12 p-3  ">
        <div className="col-span-1 pt-1">
        <div className="h-12 w-12 bg-gray-500 rounded-full dark:bg-gray-700 "></div>
        </div>
        
        <div className="col-span-11 text-base  text-white">
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-20 "></div>
           
       
        <span className=" pt-5 text-slate-500 text-base pl-1 ">
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-100 "></div>
        </span> 
       
        <div className="text-base  pt-2">
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-100"></div>
            
       </div>
    <div className="flex justify-between pt-5 ">
    <div className="flex justify-between"> <span><div className="h-7 w-7 bg-gray-500 rounded-full dark:bg-gray-700 "></div>
    </span>
    <span className="pl-1 text-slate-500"></span>
</div>
    <div className="flex justify-between"> <span>
    <div className="h-7 w-7 bg-gray-500 rounded-full dark:bg-gray-700 "></div>
    </span>
    <span className="pl-1  text-slate-500"></span>
</div>
    <div className="flex justify-between">
        <span><div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 "></div></span>
<span className="pl-1 text-slate-500"><div className="h-7 w-7 bg-gray-500 rounded-full dark:bg-gray-700 "></div></span>
</div>
    <div><div className="h-7 w-7 bg-gray-500 rounded-full dark:bg-gray-700 "></div>
</div>
<div>
<span>
<div className="h-7 w-7 bg-gray-500 rounded-full dark:bg-gray-700 "></div>

</span>
    
        </div>
        
        
    </div>
   
   



</div>
    </div>
</div>
}