import { Bookmark, Heart, MessageCircle, Repeat2, Upload } from 'lucide-react';
import tyler from '../assets/tyler.jpg'
import {  Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../pages/config';
interface Postdetails{
    name:string;
    id:Number,
    title:string,
    likeCount:number
   
}
export const Viewpost=({name,title,likeCount}:Postdetails)=>{
    const [fillcolor,setFillcolor]=useState('text-gray-500')
    async function handleLikeCount(){
      setFillcolor('text-pink')
      
    }
    return <div>
        <div className="grid grid-cols-12 p-3  ">
            <div className="col-span-1 pt-1">
                <img className="rounded-full h-10 w-10" src={tyler}/>
            </div>
            
            <div className="col-span-11 text-base  text-white">
                <span className='font-serif  font-bold'>{name}</span>
               
           
            <span className=" pt-5 text-slate-500 text-base pl-1 ">
                @{name.split(" ").join("").toLowerCase()}
            </span> 
           
            <div className="text-base  pt-2">
                {title}
                
           </div>
        <div className="flex justify-between pt-5 ">
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
            <span><Heart size={25} className={`${fillcolor}`}
             onClick={()=>{
                handleLikeCount();
            }}/></span>
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