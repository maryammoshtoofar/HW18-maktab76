import AnimatedTransitions from "../../Components/AnimatedTransitions";
import { courses } from "../../data";
import { Link } from "react-router-dom";

const BootCamps = () => {
  return (
    <AnimatedTransitions>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <div>{course.id}</div>
          <Link to={`${course.id}`} className="primaryButton">
            Read More
          </Link>
          <button></button>
        </div>
      ))}
    </AnimatedTransitions>
  );
};

export default BootCamps;
