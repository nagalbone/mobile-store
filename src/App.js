import { Container, Row } from "react-bootstrap";
import NavScrollExample from "./components/NavScrollExample";
import Footer from "./components/Footer";
import Router from "./routes/Router";
function App() {
  return (
    <>
      <Container>
        <Row>
          <NavScrollExample />
        </Row>
        <Router />
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App;
