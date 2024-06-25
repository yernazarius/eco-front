"use client";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';

const slides = [
    {
        image: '/home_images/slider/sliderImage.png',
        title: 'Лабораторный анализ',
        description: 'Измерительные приборы, реагенты и общее лабораторное оборудование от ведущих производителей',
    },
    {
        image: '/home_images/slider/sliderImage2.png',
        title: 'Лабораторный анализ',
        description: 'Измерительные приборы, реагенты и общее лабораторное оборудование от ведущих производителей',
    },
    {
        image: '/home_images/slider/sliderImage3.png',
        title: 'Лабораторный анализ',
        description: 'Измерительные приборы, реагенты и общее лабораторное оборудование от ведущих производителей',
    },
];

const HomeSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            defaultAnimation: {
                duration: 300, // Make the transition faster by reducing the duration
                easing: (t) => t, // You can customize the easing function as needed
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
                slider.on("slideChanged", () => {
                    setCurrentSlide(slider.track.details.rel);
                });
            },
        ]
    );

    return (
        <div className="relative">
            <div ref={sliderRef} className="keen-slider">
                {slides.map((slide, index) => (
                    <div key={index} className="keen-slider__slide relative">
                        <Image src={slide.image} className="mx-auto" width={2000} height={1000} alt={`Slide ${index + 1}`} />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col pl-40 items-baseline justify-center text-white p-4">
                            <h2 className="text-3xl font-bold">{slide.title}</h2>
                            <p className="text-xl mt-4">{slide.description}</p>
                            <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                                Перейти в каталог
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                <button onClick={() => instanceRef.current?.prev()} className="hover:bg-blue-500 text-white text-3xl p-2 ml-16 rounded-full">
                    <FaArrowLeftLong />
                </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                <button onClick={() => instanceRef.current?.next()} className="hover:bg-blue-500 text-white text-3xl p-2 mr-16 rounded-full">
                    <FaArrowRightLong />
                </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`w-4 h-4 rounded-full ${currentSlide === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;
