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
              <div className="h-[90dvh] w-full bg-cover bg-[url('./images/c1.jpg')]"></div>{' '}
            </Slider>
            <Slider className="w-full">
              <div className="h-[90dvh] w-full bg-cover bg-[url('./images/c2.jpg')]"></div>{' '}
            </Slider>
            <Slider className="w-full">
              <div className="h-[90dvh] w-full bg-cover bg-[url('./images/c3.jpg')]"></div>{' '}
            </Slider>
            <Slider className="w-full">
              <div className="h-[90dvh] w-full bg-cover bg-[url('./images/c4.jpg')]"></div>{' '}
            </Slider>
          </SliderContainer>
        </Carousel>
      </>
    </>
  );
}
export default AutoStartSlider;
