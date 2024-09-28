import React from 'react'
import CommentCard from './CommentCard';



function postCard({post}) {
console.log(post);
  return (
    
    <div className="card mb-3 my-3" key={post.id}>
        
            <div className="card-header d-flex justify-content-between align-items-center">
                <div className='row align-items-center column-gap-5'>
                    <div className="col-md-3">
                    <img src={`http://127.0.0.1:8000/storage/${post.user.profile_picture}`} className="circle shadow profile_image" alt="Profile" />
                    </div>
                    <div className="col-md-9"> <strong>{post.user.username}</strong></div>
               
                </div>
                 <small className="text-muted text-right">
                    {post.user.created_at}
                    </small>
            </div>
            <div className="card-body">
                <p className="card-text">{post.post_content}</p>
                <img src={post.image} className="img-fluid" alt="Post" />
            </div>
            <div className="card-footer">
                <button className="btn btn-link">Like</button>
                <button className="btn btn-link">Comment</button>
                <button className="btn btn-link">Share</button>
            </div>
            <div className="comments-section mt-3">
                <CommentCard post={post} />
               
            </div>
        </div>
  )
}


export default postCard