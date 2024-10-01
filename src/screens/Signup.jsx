import { React, useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom'; // Import useNavigate for redirection
import api, { setAuthToken } from '../api';

export default function Signup() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission reload

        // Basic client-side validation
        if ( !first_name || !last_name || !email || !password) {
            setMessage('All fields are required!');
            return;
        }

        const credentials = { first_name,last_name, email, password };

        try {
            const response = await api.post('/register', credentials, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            console.log(response.status); // Log the response

            if (response.status === 201) {
              console.log(' here');
                const data = response.data;
                setMessage(data.message);

                if (data.access_token) {
                    localStorage.setItem('token', data.access_token);
                    setAuthToken(data.access_token); // Set the token for future requests
                    navigate('/home');
                } 
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                setMessage(error.response.data.message || 'Signup failed');
            } else {
                setMessage('An error occurred. Please try again.');
            }
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
                      <div className="row">
                        <div className="col-md-6 col-12"><div className='form-group mt-5 mb-1'>
                            <label>Name</label>
                            <input
                                type='text'
                                onChange={(e) => setFirstName(e.target.value)}
                               
                                className='form-control'
                                value={first_name} // Controlled component
                            />
                        </div></div>
                        <div className="col-md-6 col-12">
                        <div className='form-group mt-5 mb-1'>
                            <label> Last Name</label>
                            <input
                                type='text'
                                onChange={(e) => setLastName(e.target.value)}
                               
                                className='form-control'
                                value={last_name} // Controlled component
                            />
                        </div>
                        </div>

                      </div>
                        
                      
                        <div className='form-group mt-3 mb-1'>
                            <label>Email</label>
                            <input
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                name='email'
                                className='form-control'
                                value={email} // Controlled component
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                name='password'
                                className='form-control'
                                value={password} // Controlled component
                            />
                        </div>
                        
                        <div className='form-group'>
                            <button type='submit' className='btn btn-success w-100'>Register</button>
                        </div>
                    </form>
                   
                        <NavLink to='/'>Alread a Member? Login</NavLink>
                       
                </div>
            </div>
        </div>
    );
}
