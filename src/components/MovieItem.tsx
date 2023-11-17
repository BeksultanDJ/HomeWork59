import React, { useState } from 'react';

interface Movie {
    id: number;
    title: string;
}

interface MovieItemProps {
    movie: Movie;
    deleteMovie: (id: number) => void;
    editMovie: (id: number, editedTitle: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, deleteMovie, editMovie }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedTitle, setEditedTitle] = useState<string>(movie.title);

    const handleEdit = () => {
        if (editedTitle.trim() !== '') {
            editMovie(movie.id, editedTitle);
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleEdit();
        }
    };

    return (
        <div>
            {isEditing ? (
                <p key={movie.id}>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        onBlur={handleEdit}
                        onKeyDown={handleKeyDown}
                    />
                </p>
            ) : (
                <div className="MovieItem" key={movie.id} onClick={setIsEditing}>
                    {movie.title}
                    <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                </div>
            )}
        </div>

    );
};

export default MovieItem;
