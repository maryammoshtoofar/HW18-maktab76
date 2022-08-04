import { useParams } from "react-router-dom";
// import { courses } from "../../data";

const BootCamp = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      {id}
      {/* {courses.find((course) => course.id === bcId)} */}
    </div>
  );
};

export default BootCamp;
