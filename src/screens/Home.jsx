import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import Header from '../components/Header'
import api, { setAuthToken } from '../api'; 
import PostCard from '../components/postCard'





function Home() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchPosts = async () => {
        const token = localStorage.getItem('token'); // Get token from localStorage
        setAuthToken(token); // Set token in Axios headers

        try {
            const response = await api.get('/post/all');
           
            setPosts(response.data);
            
           
           
        } catch (error) {
            console.error('Error fetching posts:', error);
            if (error.response) {
                setMessage(error.response.data.message || 'Failed to fetch posts');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    fetchPosts();
   
    
}, 

[]

);

  return (
    <div className='container'>
     <Header/>
     
        <Post  />
     
      {posts.map(post=>(
        <PostCard key={post.id} post={post}/>
      ))}

    </div>
  )
}

export default Home