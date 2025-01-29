import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

import Header from './component/Header';
import Footer from './component/Footer';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        fetchAllImages();
    }, []);

    const fetchAllImages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/images');
            setImages(response.data);
            setFilteredImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = images.filter(image => 
            image.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredImages(filtered);
        console.log(`Searching for ${searchTerm}`);
    };

    return (
        <div className="dashboard">
            <Header />
            <h1>Home Page</h1>

            <form onSubmit={handleSearch} className="search-bar">
                <input
                    type="text"
                    placeholder="Search for images..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="tags">
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'nature'))}>nature</span>
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'background'))}>background</span>
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'wallpaper'))}>wallpaper</span>
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'lunar new year'))}>lunar new year</span>
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'valentines'))}>valentines</span>
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'flowers'))}>flowers</span>
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'happy new year 2025'))}>happy new year 2025</span>
                <span className="tag" onClick={() => setFilteredImages(images.filter(image => image.category === 'new year'))}>new year</span>
            </div>
            <div className="image-grid">
                {filteredImages.map((image) => (
                    <div key={image.id} className="image-item">
                        <Link to={`/image/${image.id}`}>
                            <img src={image.url} alt={image.name} />
                            <div className="image-overlay">
                                <p>{image.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
