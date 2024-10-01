import {React,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'; 
import api, { setAuthToken } from '../api';


export default function  Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = { email, password };
        setIsPending(true);

        try {
            const response = await api.post('/login', credentials, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (response.status === 200) {
                const data = response.data;
                setMessage(data.message);
                
                if (data.access_token) {
                    localStorage.setItem('token', data.access_token);
                    setAuthToken(data.access_token); // Set the token for future requests
                    navigate('/home');
                } else {
                    console.log("Wrong credentials");
                }
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                setMessage(error.response.data.message || 'Login failed');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        } finally {
            setIsPending(false);
        }
    };


  
  return (

    
    <div className='form-container'>
        {message && (
        <div className="alert my-2 alert-danger" role="alert">
           <p className='container'> {message}</p>
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
    
      <NavLink to='/register'  className='btn btn-primary w-100'>Register</NavLink>
    
    </div>
    </div>
    </div>
  )
}
