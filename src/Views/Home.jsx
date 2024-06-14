import { Container } from "react-bootstrap";
import pikachu from "../assets/images/pikachu.png";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Bienvenido maestro pokemón</h1>
      <img className="mt-5" src={pikachu} alt="Pikachu" width="200" />
    </Container>
  );
};
export default Home
;
