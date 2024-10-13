"use client"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"
import React, { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import Link from 'next/link'

const slides = [
    {
        image: '/home_images/slider/sliderImage.png',
        title: 'Лабораторный анализ',
        description: 'Измерительные приборы, реагенты и общее лабораторное оборудование от ведущих производителей',
        link: '/products',
    },
    {
        image: '/home_images/slider/sliderImage2.png',
        title: 'Лабораторный анализ',
        description: 'Измерительные приборы, реагенты и общее лабораторное оборудование от ведущих производителей',
        link: '/products',
    },
    {
        image: '/home_images/slider/sliderImage3.png',
        title: 'Лабораторный анализ',
        description: 'Измерительные приборы, реагенты и общее лабораторное оборудование от ведущих производителей',
        link: '/products',
    },
]

const HomeSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            defaultAnimation: {
                duration: 300,
                easing: (t) => t,
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
                slider.on("slideChanged", () => {
                    setCurrentSlide(slider.track.details.rel)
                })
            },
        ]
    )

    return (
        <div className="relative my-4">
            {/* Slider */}
            <div ref={sliderRef} className="keen-slider">
                {slides.map((slide, index) => (
                    <div key={index} className="keen-slider__slide relative">
                        {/* Adjust image size for mobile */}
                        <Image src={slide.image} className="h-[18rem] w-full object-cover mx-auto md:w-full md:h-auto" width={2000} height={1000} alt={`Slide ${index + 1}`} />

                        {/* Overlay text, made responsive for mobile */}
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-start justify-center text-white p-4 sm:p-8 md:pl-20 lg:pl-40">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4">{slide.description}</p>
                            <Link href={slide.link} className="mt-4 sm:mt-6 px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                                Перейти в каталог
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrow Controls */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4">
                <button onClick={() => instanceRef.current?.prev()} className="hover:bg-blue-500 text-white text-2xl sm:text-3xl p-2 sm:p-3 rounded-full">
                    <FaArrowLeftLong />
                </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4">
                <button onClick={() => instanceRef.current?.next()} className="hover:bg-blue-500 text-white text-2xl sm:text-3xl p-2 sm:p-3 rounded-full">
                    <FaArrowRightLong />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${currentSlide === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default HomeSlider
