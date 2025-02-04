import { Bookmark, Heart, MessageCircle, Repeat2, Upload } from 'lucide-react';
import tyler from '../assets/tyler.jpg'
import {  useNavigate } from 'react-router-dom';
interface Postdetails{
    name:string;
    id:string,
    title:string,
    likeCount:string
   
}
export const Viewpost=({name,id,title,likeCount}:Postdetails)=>{
    const navigate= useNavigate();
    function handleLikeCount(){
       
       navigate('/home')
       console.log('hi')
    }
    return <div>
        <div className="grid grid-cols-12 p-3 ">
            <div className="col-span-1 pt-1">
                <img className="rounded-full h-10 w-10" src={tyler}/>
            </div>
            
            <div className="col-span-11 text-base text-white">
                
                {name}
           
            <span className=" pt-5 text-slate-500 text-base pl-1 ">
                {id}
            </span> 
           
            <div className="text-base  pt-1">
                {title}
                
           </div>
        <div className="flex justify-between pt-2 ">
        <div className="flex justify-between"> <span><MessageCircle size={25} className="text-gray-500 "/>
        </span>
        <span className="pl-1 text-slate-500">65</span>
</div>
        <div className="flex justify-between"> <span>
        <Repeat2 size={25} className="text-gray-500 "/>
        </span>
        <span className="pl-1  text-slate-500">45</span>
</div>
        <div className="flex justify-between">
            <span><Heart size={25} className="text-gray-500 " onClick={handleLikeCount}/></span>
<span className="pl-1 text-slate-500">{likeCount}</span>
</div>
        <div><Bookmark size={25} className="text-gray-500 "/>
</div>
<div>
    <span>
    <Upload size={25} className="text-gray-500 "/>

    </span>
        
            </div>
            
            
        </div>
       
       



</div>
        </div>
    </div>
}