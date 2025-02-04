import { Button } from "./Button"
import tyler from '../assets/tyler.jpg'
import logo from '../assets/logo.jpg'
import { Home, Search,Bell, Mail,UsersRound,UserRound,CircleEllipsis } from "lucide-react";
export const SideBar=()=>{
return <div className="pl-10 pt-2 bg-black">
    <div>
       <img  className="w-20 h-20 rounded-full p-4" src={logo}  />

    </div>
    <div>
    <Button label="Home"  icon={ <Home size={35} className="text-white-500" />}>
   
    </Button> 
    </div>
    <div>
        <Button label="Explore"
        icon={<Search  size={30 }/>
          }>
    
        </Button>
    </div>
    <div>
        <Button label="Notifications"
        icon={<Bell size={30}/>
          }></Button>
        
    </div>
    <div>
       <Button label="Messages"
       icon={<Mail size={30 }/>
      }>
          
       </Button>
    </div>
    <div>
        <Button label="Communities"
        icon={<UsersRound size={30}/>}>
        </Button>
    </div>
    <div>
       <Button label="Profile"
       icon={ <UserRound  size={30} />
      }></Button>
    </div>
    <div>
        <Button label="More"
        icon={<CircleEllipsis size={30} />
          }>

        </Button>
    </div>
    <div>
        <button className="flex justify-center  px-20 py-3 w-60 h-15 rounded-full bg-blue-400 text-white text-xl">Post</button>
    </div>
    <div>
        <button className="flex justify-between pt-10">
             <img className="rounded-full h-12 w-12 " src={tyler} />
             <span className="text-lg text-white pl-2">Tyler Durden
                <div className="text-base text-gray-500">@tylerdurden</div>
             </span>
        </button>
    </div>
</div>
}