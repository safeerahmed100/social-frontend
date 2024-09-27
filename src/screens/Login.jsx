import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'; 


export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]= useState('')
    const [message,setMessage]=useState('');
    
    const navigate = useNavigate();
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email, password);
      const credentials = { email, password };
      setIsPending(true);
  
      try {
          const response = await fetch('http://localhost:8000/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
              },
              body: JSON.stringify(credentials),
          });
  
          // Check if response is OK and then parse the JSON
          if (response.ok) {

              const data = await response.json();
              setMessage(data.message);
              console.log(data.access_token);
              if (data.access_token) {
                
                  navigate('/dashboard');
              } else {
                  console.log("wrong credentials");
              }
          } else {
              const errorData = await response.json(); // Fetch error response
              setMessage(errorData.message || 'Login failed');
              console.log(errorData);
          }
      } catch (error) {
          console.error('Error:', error);
          setMessage('An error occurred. Please try again.');
      }
      setIsPending(false)
  };
  
  return (

    
    <div className='form-container'>
        {message && (
        <div className="alert my-2 alert-danger" role="alert">
           <p class='container'> {message}</p>
     </div>
        )}
    

        <div className='row justify-content-center'>
        <div className='col-12 border shadow rounded p-5 col-md-6'>
    <form onSubmit={handleSubmit}>
        <div className='form-group mt-5 mb-1'>
            <label>Email</label>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} name='email' className='form-control' required/>
        </div>
        <div className='form-group mt-3'>
            <label>Password</label>
            <input type='password'  onChange={(e)=>setPassword(e.target.value)} name='password' className='form-control' required/>
        </div>
        <div className='form-group'>
            <a href='/forget-password'>Forget Password?</a>
        </div>
        <div className='form-group'>
          
            <button type='submit' className='btn btn-success w-100'>Login</button>
           

        </div>
    </form>
    <hr/>
    
      <a href='/register' className='btn btn-primary w-100'>Register</a>
    
    </div>
    </div>
    </div>
  )
}
