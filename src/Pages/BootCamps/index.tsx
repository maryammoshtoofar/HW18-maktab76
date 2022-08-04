import AnimatedTransitions from "../../Components/AnimatedTransitions";
import { courses } from "../../data";

import { Card, Wrapper, StyledLink, Para } from "./styled";

const BootCamps = () => {
  return (
    <AnimatedTransitions>
      <Wrapper>
        {courses.map((course) => (
          <Card key={course.id}>
            <h2>{course.name}</h2>
            <Para>{course.summary}</Para>
            <StyledLink to={`${course.id}`} className="primaryButton">
              اطلاعات بیشتر
            </StyledLink>
          </Card>
        ))}
      </Wrapper>
    </AnimatedTransitions>
  );
};

export default BootCamps;
