interface Movie {
    id: number;
    title: string;
}

interface MovieItemProps {
    movie: Movie;
    deleteMovie: (id: number) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({movie, deleteMovie,}) => {


    return (
        <li key={movie.id}>
                <input
                    type="text"
                    placeholder={movie.title}
                />
                <>
                    <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                </>
        </li>
    );
};

export default MovieItem;
