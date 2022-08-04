import { useState, useEffect } from "react";
import { Image, Wrapper } from "./styled";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const changeSlide = () => {
    if (currentSlide < 3) setCurrentSlide(currentSlide + 1);
    else if (currentSlide === 3) setCurrentSlide(1);
  };

  const showSlides = () => {
    let slides = document.getElementsByClassName(
      "slide"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlide - 1].style.display = "block";
  };
  useEffect(() => {
    showSlides();
  }, [currentSlide]);

  return (
    <Wrapper onClick={() => changeSlide()}>
      <Image className="slide" src="./images/1.png" alt="designer" />
      <Image className="slide" src="./images/2.png" alt="developer" />
      <Image className="slide" src="./images/3.png" alt="testing" />
    </Wrapper>
  );
};

export default Carousel;
