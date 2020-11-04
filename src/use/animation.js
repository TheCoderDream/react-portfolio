import { useState, useContext, useEffect } from 'react';
import {ThemeContext} from "../context/ThemeContext";

export function useAnimation () {
    const { type } = useContext(ThemeContext);
    const [ animation, setAnimation] = useState('')
    const [ timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        clearTimeout(timeoutId);
        setAnimation('');
        setAnimation('fade-in');
        setTimeoutId(
            setTimeout(() => setAnimation(''), 300)
        );
    }, [type]);


    return {
        animation
    }
}
