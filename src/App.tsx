import { MainContainer } from "./components/MainContainer";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";

function App() {
  return (
    <MainContainer>
      <Title>
        Hey! I'm Leo,
        <br />a software engineer
      </Title>
      <Subtitle>
        This website is under construction, but you can check my Linkedin
        profile if you're curious :)
      </Subtitle>
    </MainContainer>
  );
}

export default App;
