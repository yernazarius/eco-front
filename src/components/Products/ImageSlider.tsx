// components/ImageSlider.tsx
"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

interface ImageSliderProps {
    thumbnail: string;
    images: string[];
}

const ImageSlider = ({ thumbnail, images }: ImageSliderProps) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
    });

    const allImages = [thumbnail, ...images];

    return (
        <div ref={sliderRef} className="keen-slider h-[34rem]	">
            {allImages.map((src, index) => (
                <div key={index} className="keen-slider__slide number-slide">
                    <img className="h-full flex self-center mx-auto" src={`http://194.110.55.21:8000/${src}`} alt={`Product Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
