import React, { useState } from 'react';
import CommentCard from './CommentCard';

function PostCard({ post }) {
    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const hasProfilePicture = Boolean(post.user.profile_picture);
    const hasUserName = Boolean(post.user.username);

    const toggleComments = () => {
        setIsCommentVisible(!isCommentVisible);
    };
    console.log(post);
    return (
        <div className="card mb-3 my-3" key={post.id}>
            <div className="card-header d-flex justify-content-between align-items-center">
                <div className='row align-items-center column-gap-5'>
                    <div className="col-md-3">
                        {hasProfilePicture 
                      ? (<img src={`http://127.0.0.1:8000/storage/${post.user.profile_picture}`} className="circle shadow profile_image" alt="Profile" />) :
                        (<img
                    src="https://via.placeholder.com/40"
                    className="mr-3 rounded-circle"
                    alt="Default User"
                />)
            }
                    </div>
                    <div className="col-md-9">
                        {hasUserName ? (
                         <strong>{post.user.username}</strong>
                        ):
                        (
                            <strong>{post.user.first_name}</strong>
                        )}
                         </div>
                </div>
                <small className="text-muted text-right">
                    {post.user.created_at}
                </small>
            </div>
            <div className="card-body">
                <p className="card-text">{post.post_content}</p>
                <img src={`http://127.0.0.1:8000/storage/${post.image}`} className="img-fluid" alt="Post" />
            </div>
            <div className="card-footer">
                <button className="btn btn-link" onClick={toggleComments}>
                    {isCommentVisible ? 'Hide Comments' : 'Show Comments'}
                </button>
                <button className="btn btn-link">Like</button>
                <button className="btn btn-link">Share</button>
            </div>
            {isCommentVisible && post.comments && post.comments.length > 0 && (
                <div className="comments-section mt-3">
                    {post.comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default PostCard;
