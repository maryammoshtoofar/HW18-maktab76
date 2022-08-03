import AnimatedTransitions from "../../Components/AnimatedTransitions";
import { Container, Para } from "./styled";

const About = () => {
  return (
    <AnimatedTransitions>
      <Container>
        <img src="./images/4.png" />
        <Para>
          مکتب آموزشگاه نیست. مکتب یه مدرسه برنامه‌نویسیه، یعنی جایی که در
          کمترین مدت مهارت‌های مورد نیاز بازار کار رو به صورت عملی یاد میده. هدف
          مکتب استخدام هست. مدرک گرفتن فایده‌ای نداره، استخدام شدن اصل قضیه است.
          بازدهی برای مکتب مهمه. کیفیت یادگیری و فهم عمیق مطالب برای ورود به
          بازار کار مهمه.
        </Para>
      </Container>
      ;
    </AnimatedTransitions>
  );
};

export default About;
