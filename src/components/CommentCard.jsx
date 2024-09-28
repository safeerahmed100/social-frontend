import React from 'react'

function CommentCard({post}) {
  return (
    <div className="media mb-2 ">
    <img
        src="https://via.placeholder.com/40"
        className="mr-3 rounded-circle"
        alt="User"
    />
    <div className="media-body">
        <h6 className="mt-0">Commenter Name</h6>
        This is an example comment content.
    </div>
</div>
  )
}

export default CommentCard