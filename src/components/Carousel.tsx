'use client';
import React, { ReactNode } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type CarouselProps = {
  slides: ReactNode[];
  enableArrowControls?: boolean;
};

type ArrowProps = {
  left?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Arrow: React.FC<ArrowProps> = ({ left, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`keen-slider__arrow ${
        left ? 'keen-slider__arrow--left' : 'keen-slider__arrow--right'
      }`}
    >
      {left ? '<' : '>'}
    </button>
  );
};

const Carousel: React.FC<CarouselProps> = ({
  slides = [],
  enableArrowControls = false,
}) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged() {
        console.log('slide changed');
      },
      mode: 'free-snap',
      slides: {
        perView: 1,
        spacing: 15,
      },
    }
    // Add plugins here if needed
  );

  return (
    <div ref={sliderRef} className='keen-slider'>
      {slides.map((slide, index) => (
        <div key={index} className='keen-slider__slide'>
          {slide}
        </div>
      ))}
      {enableArrowControls && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
          />
          <Arrow
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
