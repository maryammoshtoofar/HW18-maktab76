import { useParams } from "react-router-dom";
import { courses } from "../../data";
import { Wrapper } from "./styled";

const BootCamp = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id))!;

  return (
    <Wrapper>
      <h1>{course.name}</h1>
      <div>{course.description}</div>
    </Wrapper>
  );
};

export default BootCamp;
