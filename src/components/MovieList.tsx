import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

interface Movie {
    id: number;
    title: string;
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [newMovie, setNewMovie] = useState<string>('');

    useEffect(() => {
        const storedMovies = localStorage.getItem('movieList');
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        }
    }, []);

    const updateLocalStorage = (updatedMovies: Movie[]) => {
        localStorage.setItem('movieList', JSON.stringify(updatedMovies));
    };

    const addMovie = () => {
        if (newMovie.trim() !== '') {
            const newMovieItem: Movie = {
                id: Math.floor(Math.random() * 1000),
                title: newMovie.trim(),
            };
            const updatedMovies = [...movies, newMovieItem];
            setMovies(updatedMovies);
            setNewMovie('');
            updateLocalStorage(updatedMovies);
        }
    };

    const deleteMovie = (id: number) => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
        updateLocalStorage(updatedMovies);
    };

    const editMovie = (id: number, editedTitle: string) => {
        const updatedMovies = movies.map(movie =>
            movie.id === id ? { ...movie, title: editedTitle } : movie
        );
        setMovies(updatedMovies);
        updateLocalStorage(updatedMovies);
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
