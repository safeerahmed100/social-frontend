import axios from 'axios'; // Correct way to import Axios
import React, { useEffect, useState } from 'react'



function postCard() {
    const [post, setPost] = useState('');

    useEffect(() => {
        let url = 'http://127.0.0.1:8000/api/';
        axios.get(url).then((res) => {
            console.log(res.data);  // Logging the response data
            setPost(res.data);  // Update state with the response data
        }).catch((error) => {
            console.error('Error fetching posts:', error);
        });
    }, []);

  return (
    <div className="post-card">
        <div className="container">
            <div className="row">
                <div className="col-8">

                </div>
            </div>
        </div>
    </div>
  )
}

export default postCard