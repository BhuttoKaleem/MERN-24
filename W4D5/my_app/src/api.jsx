import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import Header from "./header.jsx";
import { useEffect } from 'react';

function  Api(){
    const [posts, setPosts] = useState([]);
    useEffect(function () {
      fetchPosts();
    }, []);    
    async function fetchPosts() {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => setPosts(result.data));
    }
  return(
<React.Fragment>
    <Header/>
    <div className='bg-black flex flex-col text-center'>
    <h1 className='text-white'>Rest API's</h1>
  </div>
  <div className='flex flex-col'>
    <button className='rounded-full bg-emerald-400 w-20' onClick={fetchPosts}>Fetch APIs</button>
    {posts.map(function (post) {
      return (
        <div key={post} className='border-black'>
          <div className='w-30 h-10 overflow-auto'>
            {post?.title}
          </div>
        </div>
      )
    })}
  </div>
    
</React.Fragment>
        )
}
export default Api