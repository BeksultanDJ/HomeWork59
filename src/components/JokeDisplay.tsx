import React, { useState, useEffect } from 'react';

interface Joke {
    value: string;
}

const JokeDisplay: React.FC = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetchJoke();
    }, []);

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data: Joke = await response.json();
            setJoke(data.value);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    return (
        <div>
            <h2>Joke</h2>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Get Joke</button>
        </div>
    );
};

export default JokeDisplay;
