interface Postdetails{
    name:string;
    id:string,
    time:string,
    title:string
    image:string,
    lCount:string,
    rtCount:string,
    cmtCount:string,
    fillColor:string,
    handleLikeCount:string
}
export const Viewpost=({name,id,time,title,image,lCount,rtCount,cmtCount,fillColor}:Postdetails)=>{
    function handleLikeCount(){
        
    }
    return <div>
        <div className="grid grid-cols-12 p-3 ">
            <div className="col-span-1 pt-1">
                <img className="rounded-full h-10 w-10" src="/tyler.jpg" />
            </div>
            
            <div className="col-span-11 text-base text-white">
                
                {name}
           
            <span className=" pt-5 text-slate-500 text-base pl-1 ">
                {id}
            </span> 
            <span className=" pt-5 text-slate-500 text-base pl-1" >
                . {time}
                
            </span>
            <div className="text-base  pt-1">
                {title}
                <div className="pt-2">
                    <img  className=" h-full w-full border-slate-700 border cursor-pointer rounded-lg " src={image} />
                </div>
           </div>
        <div className="flex justify-between pt-2 ">
        <div className="flex justify-between"> <span><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-slate-500 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
        </span>
        <span className="pl-1 text-slate-500">{cmtCount}</span>
</div>
        <div className="flex justify-between"> <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-6 stroke-slate-500 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>
        </span>
        <span className="pl-1 text-slate-500">{rtCount}</span>
</div>
        <div className="flex justify-between">
            <span><svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} onClick={handleLikeCount} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-slate-500 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg></span>
<span className="pl-1 text-slate-500">{lCount}</span>
</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-slate-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>
</div>
<div>
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-slate-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

    </span>
        
            </div>
            
            
        </div>
       
       



</div>
        </div>
    </div>
}