import { useRef, useEffect } from 'react';

const useSound = (src) => {
    const audioRef = useRef(new Audio(src));

    // Play sound
    const playSound = () => {
        audioRef.current.play();
    };

    // Cleanup the audio element when the component unmounts
    useEffect(() => {
        return () => {
            audioRef.current.pause();  // Pause the audio
            audioRef.current.currentTime = 0;  // Reset the audio time to the beginning
        };
    }, []);

    return playSound;
};

export default useSound;
