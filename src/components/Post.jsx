import React from 'react'
import Comment from './Comment'
function Post() {
  return (
        <div className='post-container py-5 px-3 border shadow rounded'>
        <div className="row">
            <div className="col">
                <form className='col'>
                  <div className="form-group">
                <input type='text' placeholder="What's on your Mind" className='form-control'/>
                </div>
                <div className="form-group">
                <input type='file' name='image' className=' form-control'/>
                </div>
                <button className='btn btn-primary mt-3' type='submit'>Post</button>
                
                
                </form>

            </div>
        </div>
       

        </div>
  )
}

export default Post