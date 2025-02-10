import axios from "axios";
import { BACKEND_URL } from "./config";
import { useEffect, useState } from "react";

export const Create=({ isOpen, setIsOpen }:any)=>{
  const [post,setPost]=useState('');
  useEffect(()=>{
    const token=localStorage.getItem('token')
    const parsedToken=JSON.parse(token || "")
    async function sendPost(){
        await axios.post(`${BACKEND_URL}/post`,post,{
        headers:{
          Authorization:parsedToken
        }
      })
    }
  },[post])
 
    if (!isOpen) return null;
    return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative p-6 w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg">
      
    
      <div className="flex items-center justify-between  pb-2">
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-900"
        >
          ✖
        </button>
      </div>

      
      <div className="mt-4">
        <textarea onChange={(e)=>
          setPost(e.target.value)
        } className="w-full p-2  bg-gray-900 caret-white focus:outline-none text-white" placeholder="What is happening?!" />
      </div>
       
      
      <div className="flex justify-end mt-4 space-x-2">
      <button onClick={()=>setIsOpen(false)} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>

      <button onClick={sendPost} type="button" className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post</button>
      </div>
    </div>
  </div>
}