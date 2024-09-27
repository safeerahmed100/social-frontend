import {React,useState} from 'react'

export default function Signup() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]= useState('')
    const [message,setMessage]=useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form submission reload
    
        const credentials = { name ,email, password };
    
        try {
          // Add 'await' since this is an async operation
          const response = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(credentials),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setMessage(data.message)
           
          } else {
            // Handle error like invalid credentials
           setMessage(data.message)
          }
        } catch (error) {
            console.log(data)
        }
      };
    
  return (

    
    <div className='form-container'>
        {message && (
        <div className="alert alert-danger" role="alert">
            {message}
     </div>
        )}
    

        <div className='row justify-content-center'>
        <div className='col-12 border shadow rounded p-5 col-md-6'>
    <form onSubmit={handleSubmit}>
    <div className='form-group mt-5 mb-1'>
            <label>Name</label>
            <input type='text' onChange={(e)=>setName(e.target.value)} name='name' className='form-control'/>
        </div>
        <div className='form-group mt-3 mb-1'>
            <label>Email</label>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} name='email' className='form-control'/>
        </div>
        <div className='form-group mt-3'>
            <label>Password</label>
            <input type='password'  onChange={(e)=>setPassword(e.target.value)} name='password' className='form-control'/>
        </div>
        <div className='form-group'>
            <a href='/'>Already a User?</a>
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-success w-100'>Register</button>
        </div>
    </form>
    </div>
    </div>
    </div>
  )
}
