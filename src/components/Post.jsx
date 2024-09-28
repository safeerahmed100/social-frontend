import React from 'react'
import Comment from './Comment'
function Post() {
  return (
    <div className="card mb-3">
    <div className="card-body">
        <textarea className="form-control" rows="3" placeholder="What's on your mind?" />
        <button className="btn btn-primary mt-2">Post</button>
    </div>
</div>
  )
}

export default Post