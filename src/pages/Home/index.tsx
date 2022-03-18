import Card from "../../components/Card";
import Header from "../../components/Header";
import { Wrapper } from "./styles";
function Home() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Card
          titulo="Teste"
          resumo="sfhjgbsyu usgbfuysgbfyu fusgbfuy"
          link="teste"
          image="https://rollingstone.uol.com.br/media/_versions/michael-scott-reprod-comedy-central_widelg.jpg"
        />
      </Wrapper>
    </div>
  );
}

export default Home;
