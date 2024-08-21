// components/ImageSlider.tsx
"use client"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from 'next/image'

interface ImageSliderProps {
    thumbnail: string
    images: string[]
}

const ImageSlider = ({ thumbnail, images }: ImageSliderProps) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
    })

    const allImages = [thumbnail, ...images]

    return (
        <div ref={sliderRef} className="keen-slider h-[34rem]	">
            {allImages.map((src, index) => (
                <div key={index} className="keen-slider__slide number-slide">
                    <Image width={900} height={900} className="h-full flex self-center object-cover mx-auto" src={`${process.env.NEXT_PUBLIC_S3_URL}${src}`} alt={`Product Image ${index + 1}`} />
                </div>
            ))}
        </div>
    )
}

export default ImageSlider
