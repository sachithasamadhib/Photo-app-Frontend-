import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ImageDetails.css';
import Header from './component/Header';
import Footer from './component/Footer';

const ImageDetails = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [relatedImages, setRelatedImages] = useState([]);

    useEffect(() => {
        fetchImageDetails();
    }, [id]);

    const fetchImageDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/images/${id}`);
            setImage(response.data);
            fetchRelatedImages(response.data.category);
        } catch (error) {
            console.error('Error fetching image details:', error);
        }
    };

    const fetchRelatedImages = async (category) => {
        try {
            const response = await axios.get('http://localhost:8080/api/images');
            const related = response.data.filter(img => img.category === category && img.id !== parseInt(id));
            setRelatedImages(related);
        } catch (error) {
            console.error('Error fetching related images:', error);
        }
    };

    if (!image) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            <div className="image-details">
                <h2>{image.name}</h2>
                <img src={image.url} alt={image.description} className="large-image" />
                <p className="description">{image.description}</p>
                <h3>Related Images</h3>
                <div className="related-images">
                    {relatedImages.map((relatedImage) => (
                        <Link to={`/image/${relatedImage.id}`} key={relatedImage.id} className="related-image-item">
                            <img src={relatedImage.url} alt={relatedImage.description} />
                            <p>{relatedImage.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ImageDetails;
