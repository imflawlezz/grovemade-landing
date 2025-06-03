'use client';

import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type CarouselProps = {
    children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 1,
            spacing: 12,
        },
        breakpoints: {
            '(min-width: 640px)': {
                slides: { perView: 2, spacing: 16 },
            },
            '(min-width: 768px)': {
                slides: { perView: 3, spacing: 18 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 4, spacing: 20 },
            },
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
        },
        created(s) {
            setSlidesPerView(s.track.details.slides.length / s.track.details.slidesLength);
        },
        updated(s) {
            setSlidesPerView(s.track.details.slides.length / s.track.details.slidesLength);
        },
    });

    // Calculate slides per view based on window width
    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 640) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);

    const totalSlides = React.Children.count(children);
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    const activeDot = Math.floor(currentSlide / slidesPerView);

    return (
        <div className="w-full">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6">
                {Array.from({ length: totalDots }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => slider.current?.moveToIdx(idx * slidesPerView)}
                        className={`transition-all duration-300 bg-black
              ${idx === activeDot ? 'w-2 h-2 sm:w-2.5 sm:h-2.5' : 'w-1.5 h-1.5 opacity-50'}
              `}
                        aria-label={`Go to group ${idx + 1}`}
                    />
                ))}
            </div>

            <div className="px-4 sm:px-6 md:px-8">
                <div ref={sliderRef} className="keen-slider">
                    {React.Children.map(children, (child, idx) => (
                        <div className="keen-slider__slide" key={idx}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;