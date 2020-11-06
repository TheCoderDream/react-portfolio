import React, { useEffect, useState } from 'react';
import './index.scss';

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};

const BackToTop = () => {
    const [visible, setVisible] = useState('');
    useEffect(() => {
        function handleScroll(e) {
            if (window.scrollY > 0) {
                setVisible('show')
            } else {
                setVisible('hide')
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div onClick={scrollToTop} className={`back-to-top ${visible}`}>
            <i className="fas fa-arrow-circle-up"></i>
        </div>
    );
};

export default BackToTop;
