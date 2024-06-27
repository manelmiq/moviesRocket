import { Container, Main } from "./styles";
import { Header } from '../../components/header';
import { ButtonText } from "../../components/buttonText";
import { FiArrowLeft } from "react-icons/fi";

export function MainGrid({title, children}) {
  return(
    <Container>
      <Header/>
      <ButtonText to="/" title="Back" icon={FiArrowLeft} />
      <Main>
        {children}
      </Main>
    </Container>
  )
}