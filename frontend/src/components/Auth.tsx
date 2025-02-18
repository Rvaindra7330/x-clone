import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.jpg'
import { useState } from "react"
import { SignupInput } from "@rdevs/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../pages/config"
import { toast } from "react-toastify"



export const Auth=({type}:{type:"signup"|"signin"})=>{
    
    const [postInputs,SetPostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();
   async function handleAuth(){
    try{
        setIsLoading(true)
         const response= await axios.post(`${BACKEND_URL}/user/${type==="signup"?"signup":"signin"}`,postInputs,
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
         );
         
         const userInfo= await response.data
         console.log(response.data)
         localStorage.setItem("token",JSON.stringify(userInfo.jwt))
         localStorage.setItem("username",userInfo.name);
        toast.success(
            type==="signup"?"Signedup successfully":"login successful",
            {
                className: 'bg-white-500  w-80 text-gray-800 font-serif text-sm p-4 rounded-lg',
              }
        )
         setTimeout(() => {
            navigate('/home')
         }, 2000);
         
    }
    catch(e:any){
        
        navigate('/error',{state:{
            HttpStatusCode:e.status
        }})
    }
    finally{
        setIsLoading(false)
    }
    
       
         
    }
    return  <div className="bg-black grid grid-cols-12 ">
    <div className="col-span-7">
        <div className="flex flex-col justify-center h-screen items-center">
            <img src={logo}  alt="" />
        </div>

    </div>
    <div className="col-span-5">
        <div className=' flex flex-col justify-center  text-white mt-40'>
        <div className="text-6xl font-extrabold text-gray-150 font-serif  ">
            Happening now

        </div>
        <div className='mt-10 text-3xl font-extrabold  font-serif  '>
            Join today.
        </div>
        <div className='mt-10 text-xl font-semibold font-sans'>
            {type==='signup'?"Already have an account?":"Don't have an account?"}
            <Link to={type==='signup'?"/signin":"/signup"} className="pl-2 text-gray-500 underline">{type==='signin'?"Signup":"Signin"}</Link>

          </div>
          {type==="signup"?<div className='pt-3'>
        <label  className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Name</label>
        <input type="text"onChange={(e)=>{
            SetPostInputs(c=>({
                ...c,
                name:e.target.value
            }))
        }}  className="focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
    
        </div>:null}
        <div className='pt-3'>
        <label  className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Username</label>
        <input type="text"onChange={(e)=>{
            SetPostInputs(c=>({
                ...c,
                email:e.target.value
            }))
        }}  className="focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
    
        </div>
        <div className='pt-2'>
        <label  className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Password</label>
        <input type="password" onChange={(e)=>{
            SetPostInputs(c=>({
                ...c,
                password:e.target.value
            }))
        }}  className="focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
    
        </div>
        <div className='pt-5 '>
        <button type="button" onClick={handleAuth} className="text-white w-80 bg-sky-500 hover:bg-sky-700   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
        {isLoading ? (
        <>
        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3  text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        <span className="pr-2"></span>{type === "signup" ? "Signingup.." : "Signingin.."}
        </>
      ) : (
        type === "signup" ? "Signup" : "Signin"
      )}
      </button>

        </div>
        
        </div>
        
        
        
        
    </div>
</div>
}