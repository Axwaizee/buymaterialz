import React from 'react';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from './carousel.tsx';
function AutoStartSlider() {
  const OPTIONS = { loop: true };
  return (
    <>
      <>
        <Carousel options={OPTIONS} isAutoPlay={true} className="w-full">
          <SliderContainer>
            <Slider className="w-full">
              <div className="bg-red-500 h-[90dvh] w-full"></div>{' '}
            </Slider>
            <Slider className="w-full">
              <div className="bg-blue-500 h-[90dvh] w-full"></div>{' '}
            </Slider>
            <Slider className="w-full">
              <div className="bg-green-500 h-[90dvh] w-full"></div>{' '}
            </Slider>
            <Slider className="w-full">
              <div className="bg-yellow-500 h-[90dvh] w-full"></div>{' '}
            </Slider>
          </SliderContainer>
        </Carousel>
      </>
    </>
  );
}
export default AutoStartSlider;
