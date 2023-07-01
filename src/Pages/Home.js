import { Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import AllProducts from "./AllProducts";
const Home = () => {
  return (
    <>
      <Row>
        <HomeCarousel />
      </Row>
      <Row>
        <AllProducts />
      </Row>
    </>
  );
};

export default Home;
