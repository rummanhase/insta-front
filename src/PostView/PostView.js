import React , {useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";
import './PostView.css'
import SinglePost from "./SinglePost";


function PostView() {
  const [posts , setPosts] = useState([])
  
  useEffect(()=>{
    fetchPosts()
  } , [])

  async function fetchPosts() {
    const response = await fetch('/posts');
    const json = await response.json();
    setPosts(json.result);
  }

  console.log(posts);


  return (
   <>
     <NavBar/>
     <div className="all-post">
     {
          posts.length > 0 ? posts.map((post , index)=>(
            <div className="my-post" key={index}>
              <SinglePost post={post}/>
            </div>
          )) : <p>No Posts Found</p>
        }
     </div>
   </>
  );
}
export default PostView;