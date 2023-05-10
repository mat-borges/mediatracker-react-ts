import poster from '../../assets/images/the-flash.webp';
import styled from 'styled-components';

export default function SeriesPage() {
  return (
    <MovieContainer>
      <Poster>
        <h2>Série</h2>
        <img src={poster} alt="poster" />
      </Poster>
      <MediaInfo>
        <h1>The Flash (2014)</h1>
        <h3>Lançamentos</h3>
        <p>Quarta-Feira</p>
        <h3>Sinopse</h3>
        <p>
          The Flash é o filme solo do herói estrelado pelo ator Ezra Miller. Todo mundo já pensou em voltar no tempo
          para mudar alguma coisa que incomodou a vida, é por isso que Flash decide fazer o mesmo. Depois dos eventos de
          Liga da Justiça, Barry Allen decide viajar no tempo para evitar o assassinato de sua mãe, pelo qual seu pai
          foi injustamente condenado à cadeia. O que ele não imaginava seria que sua atitude teria consequências
          catastróficas para o universo. Ao voltar no tempo, Allen se vê em um efeito borboleta e começa a viajar entre
          mundos diferentes do seu. Para voltar para seu plano original, Flash contará com a ajuda de versões de heróis
          que já conheceu, incluindo versões do Batman que já são conhecidas (Michael Keaton e Ben Affleck), para evitar
          mais quebras entre universos e voltar ao normal. Baseado livremente na HQ &quot;Flashpoint&quot;.
        </p>
        <h3>Elenco</h3>
        <p>Fulano, Cicrano</p>

        <div>
          <p>
            <strong>Temporadas:</strong> 9
          </p>
          <p>
            <strong>Episódios:</strong> 210
          </p>
        </div>
      </MediaInfo>
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  margin: 0 auto;
  margin-top: 3.6rem;
  width: 60%;
  display: flex;
  height: 60vh;
  img {
    height: 50vh;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
  }
`;

const Poster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
    font-weight: 900;
  }
`;

const MediaInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3.7rem;
  h1 {
    font-weight: 900;
    font-size: 2.5rem;
    margin: 2.8rem 0 1.4rem 0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h3 {
    font-weight: 700;
  }
  p + h3,
  div {
    margin-top: 1.4rem;
  }
  p {
    strong {
      font-weight: 700;
    }
  }
`;
