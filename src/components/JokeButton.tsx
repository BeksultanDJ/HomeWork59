import React from 'react';

interface JokeButtonProps {
    onClick: () => void;
}

const JokeButton: React.FC<JokeButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Get Joke</button>
    );
};

export default JokeButton;
