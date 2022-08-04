import AnimatedTransitions from "../../Components/AnimatedTransitions";
import { Wrapper } from "./styled";

const Contact = () => {
  return (
    <AnimatedTransitions>
      <Wrapper>
        <p>
          خیابان آزادی، بعد از دانشگاه شریف، نرسیده به میدان آزادی، کوچه آران،
          پلاک 11، واحد 7
        </p>
        <p>کد پستی: 1458844800 ساعات پاسخگویی 9 الی 18</p>
      </Wrapper>
    </AnimatedTransitions>
  );
};

export default Contact;
