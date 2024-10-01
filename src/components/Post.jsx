import React, { useState } from 'react'
import api, { setAuthToken } from '../api';

function Post({message}) {
 const [post_content,setPostText]= useState('')
 const [image,setPostImage]= useState(null)
 const [isPending, setIsPending] = useState(false);



 const handlePostUpload= async (e)=>{
  e.preventDefault();
  const postData = new FormData();
   postData.append('post_content', post_content);
   if (image) {
    postData.append('image', image); // Append the file
}
  try{
    const response = await api.post('/create-post', postData, {
      headers: {
       'Content-Type': 'multipart/form-data',
        
    },
  });
  
  if(response.status === 200){
      console.log(response.data);
      setPostText('');
      setPostImage(null);
  }
  
    else{
      console.log('error',response.data);
    }
  

 }
 catch (error) {
  console.error('Error:', error);
  if (error.response) {
      console.log(error.response.data.message )
  } else {
      console.log('An error occurred. Please try again.');
  }
} finally {
  setIsPending(false);
}
}

  return (
    <div className="card mb-3">
    <div className="card-body">
      <form onSubmit={handlePostUpload}>
        <textarea className="form-control"   value={post_content} rows="3" onChange={(e)=>setPostText(e.target.value)} placeholder="What's on your mind?" />
        <div className="input-group my-3">
  <div className="input-group-prepend">
    <span className="input-group-text">Upload</span>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" onChange={(e)=>setPostImage(e.target.files[0])}  />
    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
  </div>
</div>

        <button className={`btn btn-primary mt-2 ${isPending ? 'disabled' : ''}`} disabled={isPending}>
        {isPending ? 'Posting...' : 'Post'}</button>
        </form>
    </div>
</div>
  )
}

export default Post