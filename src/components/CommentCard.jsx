import React from 'react';

function CommentCard({ comment }) {
    // Check if the user has a profile picture
    const hasProfilePicture = Boolean(comment.user.profile_picture);

    return (
        <div className="media mb-4 pl-2">
            {hasProfilePicture ? (
                <img
                    src={`http://127.0.0.1:8000/storage/${comment.user.profile_picture}`}
                    className="mr-3 profile_image rounded-circle"
                    alt="Profile"
                />
            ) : (
                <img
                    src="https://via.placeholder.com/40"
                    className="mr-3 rounded-circle"
                    alt="Default User"
                />
            )}
            <div className="media-body">
                <h6 className="mt-0">{comment.user.username}</h6>
                {comment.comment_content}
            </div>
        </div>
    );
}

export default CommentCard;
