import { useLocation, useNavigate } from "react-router-dom"

export const Errorhandle=()=>{
    const navigate=useNavigate()
    const location = useLocation();
  const statusCode = location.state.HttpStatusCode || "Unknown Error"
  console.log(statusCode)
  const errorMessages :any = {
    403: "Forbidden -User Already Exists! please login",
    404: "User Not Found!",
    411:"Inputs are incorrect-length required "
  };


    function goBackHome(){
        statusCode===403?navigate('/signin') :navigate('/signup')
    }   
    return <div className="flex flex-col h-screen justify-center items-center bg-black ">
        <div className="text-white font-serif font-bold text-4xl">
       {errorMessages[statusCode] }
        </div>
        
        <div>
        <button type="button" onClick={goBackHome} className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {statusCode===403?"Signin":"Signup"}</button>
        </div>
      
    </div>
}