import styled from "styled-components";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Home />
      <AboutMe/>
      <Works />
      <Contact />
    </Container>
  );
}

export default App;