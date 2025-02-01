import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
export const Signup = () => {
    return <div className="bg-black grid grid-cols-12 ">
        <div className="col-span-7">
            <div className="flex flex-col justify-center h-screen items-center">
                <img src={logo} className='max-h-max max-w-max' alt="" />
            </div>

        </div>
        <div className="col-span-5">
            <div className=' flex flex-col justify-center  text-white mt-40'>
            <div className="text-7xl font-extrabold text-gray-150 font-serif  ">
                Happening now

            </div>
            <div className='mt-10 text-3xl font-extrabold  font-serif  '>
                Join today.
            </div>
            <div className='mt-10 text-xl font-semibold font-sans'>
                Already have an account?<Link to={'/signin'}> signin</Link>
            </div>
            <div className='pt-3'>
            <label  className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Username</label>
            <input type="text" id="first_name" className="focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
        
            </div>
            <div className='pt-2'>
            <label  className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Password</label>
            <input type="password" id="first_name" className="focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
        
            </div>
            <div className='pt-5 '>
            <button type="button" className="text-white w-80 bg-sky-500 hover:bg-sky-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Signup</button>

            </div>
            
            </div>
            
            
            
            
        </div>
    </div>
}