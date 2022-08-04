import { useParams } from "react-router-dom";
import { courses } from "../../data";

const BootCamp = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id))!;

  return (
    <>
      <div>{course.id}</div>
      <div>{course.name}</div>
      <div>{course.description}</div>
    </>
  );
};

export default BootCamp;
