import MovieList from './components/MovieList';
import JokeDisplay from './components/JokeDisplay.tsx';

const App = () => {
    return (
        <div className="App">
            <h1>Movies</h1>
            <MovieList />
            <JokeDisplay/>
        </div>
    );
};

export default App;
