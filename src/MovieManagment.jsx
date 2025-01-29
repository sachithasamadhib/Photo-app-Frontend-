import React, { useState } from 'react';

function MovieManagement ()  {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addMovie = () => {
        setMovies([...movies, { title, description }]);
        setTitle('');
        setDescription('');
    };

    return (
        <div className="movie-management">
            <h2>Manage Movies</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addMovie}>Add Movie</button>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieManagement;
