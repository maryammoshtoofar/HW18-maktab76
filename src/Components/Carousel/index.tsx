import { useState } from "react";
import { Image, Wrapper } from "./styled";

function Carousel() {
  //   const [currentSlide, setCurrentSlide] = useState(1);
  // const showSlides = (n) => {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  // };

  return (
    <Wrapper>
      <Image className="slide" src="./images/1.png" alt="designer" />
      <Image className="slide" src="./images/2.png" alt="developer" />
      <Image className="slide" src="./images/3.png" alt="testing" />
    </Wrapper>
  );
}

export default Carousel;
