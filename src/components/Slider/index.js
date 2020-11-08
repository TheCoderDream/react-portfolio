import React, { useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Dots from "./Dots";

const Slider = (
    {
        classNames,
        images
    }
) => {
    const imageRef = useRef();
    const [img, setImg] = useState(images[0]);
    const [aItem, setAItem] = useState(0);


    const handleImageChange = (e) => {

        let  clientX;

        if(e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        const currentX = clientX - imageRef.current.getBoundingClientRect().left;


        const part = imageRef.current.clientWidth / images.length;

        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }

        if (imgIndex >= images.length) {
            imgIndex = images.length - 1;
        }
        setAItem(imgIndex);
        setImg(images[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(images[0]);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(images[i]);
        setAItem(i);
    }

    return (
        <div ref={imageRef} className={classNames} style={{position: 'relative'}}>
            <LazyLoadImage
                src={img}
                alt="works"
                effect="blur"
                onMouseMove={handleImageChange}
                onMouseOut={handleMouseOut}
                onTouchMove={handleImageChange}
                onTouchEnd={handleMouseOut}
                />
            <Dots len={images.length} activeItem={aItem} changeItem={changeImage} />
        </div>
    );
};

export default Slider;
