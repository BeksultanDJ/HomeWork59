import React, { useState } from 'react';
import MovieItem from './MovieItem';

interface Movie {
    id: number;
    title: string;
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [newMovie, setNewMovie] = useState<string>('');



    const addMovie = () => {
        if (newMovie.trim() !== '') {
            const newMovieItem: Movie = {
                id: Math.floor(Math.random() * 1000),
                title: newMovie.trim(),
            };
            setMovies([...movies, newMovieItem]);
            setNewMovie('');
        }
    };



    const deleteMovie = (id: number) => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
    };

    const editMovie = (id: number, editedTitle: string) => {
        const updatedMovies = movies.map(movie =>
            movie.id === id ? { ...movie, title: editedTitle } : movie
        );
        setMovies(updatedMovies);
    };

    return (
        <div>
            <input
                className="inputName"
                type="text"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
            />
            <button onClick={addMovie}>Add</button>

                <h5>To watch list</h5>
                {movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        editMovie={editMovie}
                        deleteMovie={deleteMovie}
                    />
                ))}

        </div>
    );
};

export default MovieList;
