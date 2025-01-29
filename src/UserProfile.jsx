import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import Header from './component/Header';
import Footer from './component/Footer';

const UserProfile = () => {
    const [userImages, setUserImages] = useState([]);
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newImageName, setNewImageName] = useState('');
    const [newImageDesc, setNewImageDesc] = useState('');
    const [editImageName, setEditImageName] = useState('');
    const [editImageDesc, setEditImageDesc] = useState('');
    const userId = 153; 

    useEffect(() => {
        fetchUserImages();
    }, []);

    const fetchUserImages = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/images/user/${userId}`);
            setUserImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const addUserImage = async () => {
        const newImage = { url: newImageUrl, name: newImageName, description: newImageDesc, userId };
        try {
            const response = await axios.post('http://localhost:8080/api/images/upload', newImage);
            alert(response.data);
            fetchUserImages();
            setNewImageUrl('');
            setNewImageName('');
            setNewImageDesc('');
        } catch (error) {
            console.error('Error adding image:', error);
        }
    };

    const updateUserImage = async (id) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/images/update/${id}`, {
                name: editImageName,
                description: editImageDesc,
            });
            alert(response.data);
            fetchUserImages();
        } catch (error) {
            console.error('Error updating image:', error);
        }
    };

    const deleteUserImage = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/images/delete/${id}`);
            alert(response.data);
            fetchUserImages();
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <>
            <div className="user-profile">
                <Header />

                <h3>Add New Image</h3>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Image Name"
                    value={newImageName}
                    onChange={(e) => setNewImageName(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Image Description"
                    value={newImageDesc}
                    onChange={(e) => setNewImageDesc(e.target.value)}
                    className="input-field"
                />
                <button className="add-btn" onClick={addUserImage}>Add Image</button>

                <h3>Your Images</h3>
                <div className="image-grid">
                    {userImages.map(image => (
                        <div key={image.id} className="image-item">
                            <img src={image.url} alt={image.description} />
                            <div className="image-details">
                                <input
                                    type="text"
                                    value={editImageName}
                                    placeholder="Edit Name"
                                    onChange={(e) => setEditImageName(e.target.value)}
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    value={editImageDesc}
                                    placeholder="Edit Description"
                                    onChange={(e) => setEditImageDesc(e.target.value)}
                                    className="input-field"
                                />
                                <button className="update-btn" onClick={() => updateUserImage(image.id)}>Update</button>
                                <button className="delete-btn" onClick={() => deleteUserImage(image.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;
