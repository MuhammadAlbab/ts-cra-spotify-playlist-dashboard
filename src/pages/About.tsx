import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };
  return (
    <>
      <div>About</div>
      <button onClick={handleNav}>go to home</button>
    </>
  );
};

export default About;
