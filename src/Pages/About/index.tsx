import AnimatedTransitions from "../../Components/AnimatedTransitions";
import { Container, Para } from "./styled";

const About = () => {
  return (
    <AnimatedTransitions>
      <Container>
        <img src="./images/4.png" />
        <Para>
          مکتب آموزشگاه نیست. مکتب یه مدرسه برنامه‌نویسیه، یعنی جایی که در
          کمترین مدت مهارت‌های مورد نیاز بازار کار رو به صورت عملی یاد میده.
        </Para>
      </Container>
      ;
    </AnimatedTransitions>
  );
};

export default About;
