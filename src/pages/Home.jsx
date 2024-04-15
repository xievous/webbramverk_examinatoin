import Cardstack from "../components/cardstack/Cardstack";
import { Top } from "../components/top/Top";
import { useNavigate } from "react-router-dom";

function Home() {
  const top = "home";
  const navigate = useNavigate();

  function handleClick() {
    navigate("/addcard");
  }

  return (
    <>
      <Top top={top} />
      <Cardstack />
      <button onClick={handleClick}>ADD NEW CARD</button>
    </>
  );
}

export default Home;
