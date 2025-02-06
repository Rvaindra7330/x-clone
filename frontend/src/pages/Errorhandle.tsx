import { useNavigate } from "react-router-dom"

export const Errorhandle=()=>{
    const navigate=useNavigate()
    function goBackHome(){
        navigate('/signup')
    }
    return <div className="flex flex-col h-screen justify-center items-center bg-black ">
        <div className="text-white font-serif text-4xl">
        User does not exists!!  
        </div>
        
        <div>
        <button type="button" onClick={goBackHome} className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>
        </div>
      
    </div>
}