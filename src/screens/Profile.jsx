import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileEdit() {
    const [user, setUser] = useState({
        username: '',
        gender: '',
        dob: '',
        image: null,
    });
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/profile'); // Endpoint to get logged-in user
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setUser((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);

        const formData = new FormData();
        formData.append('username', user.username);
        formData.append('gender', user.gender);
        formData.append('dob', user.dob);
        if (user.image) {
            formData.append('image', user.image);
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/profile', formData);
            console.log(response.data.message); // Handle success message
        } catch (error) {
            console.error('Error updating profile:', error.response.data); // Handle validation errors
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
            <select name="gender" value={user.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="date" name="dob" value={user.dob} onChange={handleChange} required />
            <input type="file" name="image" onChange={handleFileChange} />
            <button type="submit" className='btn btn-success w-100' disabled={isPending}>
                {isPending ? 'Updating...' : 'Update Profile'}
            </button>
        </form>
    );
}

export default ProfileEdit;
