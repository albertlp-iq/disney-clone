import React from 'react';
import useSound from '../Services/ClickSound';  // Adjust the path if necessary

function ButtonWithSound({ soundSrc, children, onClick, className, ...props }) {
    // Create a function that will play the sound
    const playSound = useSound(soundSrc);

    const handleClick = (e) => {
        playSound(); // Play the sound
        if (onClick) {
            onClick(e); // Call the original click handler if provided
        }
    };

    return (
        <button 
            onClick={handleClick} 
            className={`btn ${className}`}  // Add the className here
            {...props}  // Forward any other props (like "type", etc.)
        >
            {children}
        </button>
    );
}

export default ButtonWithSound;
