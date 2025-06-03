import { ExternalLink } from "./components/ExternalLink";
import { MainContainer } from "./components/MainContainer";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";
import { EditorDoodle } from "./components/EditorDoodle";

export const App = () => {
  return (
    <MainContainer>
      <Title>
        Hey! I'm Leo,
        <br />a software engineer
      </Title>
      <Subtitle>
        This website is under construction, but you can check my{" "}
        <ExternalLink to="https://github.com/Leocano">Github</ExternalLink> and{" "}
        <ExternalLink to="https://www.linkedin.com/in/leonardo-cano/">
          Linkedin
        </ExternalLink>{" "}
        if you're curious :D
      </Subtitle>
      <EditorDoodle />
    </MainContainer>
  );
};

export default App;
