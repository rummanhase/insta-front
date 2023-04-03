import React , {useState , useEffect} from "react";
import "./PostView.css"
import {Link} from 'react-router-dom'
import heart from '../image/heart.png'
import share from '../image/share.png'
import more from '../image/more_icon.svg'


function SinglePost(props) {
  const { post } = props;

  let image = post.image
  console.log(`${process.env.REACT_APP_BASE_URL}/${image}`);
  const [picture , myPicture] = useState('')
  async function fetchPosts() {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${image}`);
    const json = await response.json();
    myPicture(json.result);
  }

  useEffect(()=>{
    fetchPosts()
  } , [])

  const date = new Date().toDateString()
  return (
    <div >
      <nav className="navbar bg-body-tertiary my-nav my-container">
        <span className="my-header">
          <h6>{post.author}</h6>
          <span>{post.location}</span>
        </span>
        <Link to='/formPage'><img src={more} alt="Bootstrap" /></Link>
      </nav>

      <img src={picture} alt="image" />
      <div className="navbar bg-body-tertiary my-container">
        <div >
        <img src={heart} alt="Bootstrap" />
        <img src={share} alt="Bootstrap" />
        </div>
        {date}
      </div>
      <h6 className="my-desc">{post.description}</h6>
    </div>
  );
}

export default SinglePost;

