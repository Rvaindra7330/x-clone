import { ReactElement } from "react";
interface Buttonprops{
    label:string,
    icon:ReactElement | null
}
export const Button=({label,icon}:Buttonprops)=>{
    return <button className='flex items-center space-x-3 px-6 py-3 rounded-full bg-zinc-950 text-white text-lg hover:bg-gray-800 focus:outline-none '
    >
        {icon && <span className="text-xl">{icon}</span>}
        <span className="invisible lg:visible">{label}</span>
    </button>
}
