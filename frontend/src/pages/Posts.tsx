import { Viewpost } from "../components/Viewpost"
import { Post } from "./Post"
import fc1 from '../assets/fc1.jpg'
import fc2 from '../assets/fc2.jpg'
import fc3 from '../assets/fc3.jpg'
import fc4 from '../assets/fc4.jpg'
import fc5 from '../assets/fc5.jpg'
import fc6 from '../assets/fc6.jpg'
export const Posts=()=>{
    const posts=[
        {
            name:'Tyler Durden',
            id:'@tylerdurden',
            time:'37m',
            content:`Advertising has us chasing cars and clothes.working jobs we hate so we can buy shit we dont need.we are the middle children of 
            the history ,man.No purpose or place.We have no great war or no great depression.Ours great war is a spiritual war.Our great depression is our lives.`,
            rtCount:'24',
            cmtCount:'45',
            lkCount:'120',
            image:fc1
            
        
        },
        {
            name:'Tyler Durden',
            id:'@tylerdurden',
            time:'37m',
            content:`Advertising has us chasing cars and clothes.working jobs we hate so we can buy shit we dont need.we are the middle children of 
            the history ,man.No purpose or place.We have no great war or no great depression.Ours great war is a spiritual war.Our great depression is our lives.`,
            rtCount:'24',
            cmtCount:'45',
            lkCount:'120',
            image:fc2
        
        },
        {
            name:'Tyler Durden',
            id:'@tylerdurden',
            time:'37m',
            content:`Advertising has us chasing cars and clothes.working jobs we hate so we can buy shit we dont need.we are the middle children of 
            the history ,man.No purpose or place.We have no great war or no great depression.Ours great war is a spiritual war.Our great depression is our lives.`,
            rtCount:'24',
            cmtCount:'45',
            lkCount:'120',
            image:fc3
        
        },
        {
            name:'Tyler Durden',
            id:'@tylerdurden',
            time:'37m',
            content:`Advertising has us chasing cars and clothes.working jobs we hate so we can buy shit we dont need.we are the middle children of 
            the history ,man.No purpose or place.We have no great war or no great depression.Ours great war is a spiritual war.Our great depression is our lives.`,
            rtCount:'24',
            cmtCount:'45',
            lkCount:'120',
            image:fc4
        
        },
        {
            name:'Tyler Durden',
            id:'@tylerdurden',
            time:'37m',
            content:`Advertising has us chasing cars and clothes.working jobs we hate so we can buy shit we dont need.we are the middle children of 
            the history ,man.No purpose or place.We have no great war or no great depression.Ours great war is a spiritual war.Our great depression is our lives.`,
            rtCount:'24',
            cmtCount:'45',
            lkCount:'120',
            image:fc6
        
        },
        {
            name:'Tyler Durden',
            id:'@tylerdurden',
            time:'37m',
            content:' Your are not your job!',
            rtCount:'24',
            cmtCount:'45',
            lkCount:'120',
            image:"fc6.jpg"
        
        },
    ]
    
    return <div className="divide-y divide-slate-700 ">
       {
        posts.map(post=> <div>
            <Viewpost name={post.name} id={post.id} time={post.time} title={post.content} rtCount={post.rtCount}
            cmtCount={post.cmtCount} lCount={post.lkCount} image={post.image} fillColor={""} handleLikeCount={""}></Viewpost>
            
            </div>)
       }
      
        
    </div>
}