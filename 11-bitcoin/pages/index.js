import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from "../components/Precio";
import {api} from '../Config.json';
import Noticias from "../components/Noticias";
import Eventos from "../components/Eventos";

const Index = (props) => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del bitcoin</h2>
        <Precio
          precioBitcoin={props.precioBitcoin}
        />
      </div>

      <div className="col-md-8">
        <h2>Noticias sobre Bitcoin</h2>
        <Noticias
          noticias={props.noticias}
        />
      </div>

      <div className="col-md-4">
        <h2>Próximos eventos Bitcoin</h2>
        <Eventos
          eventos={props.eventos}
        />
      </div>
    </div>
  </MasterPage>
);

Index.getInitialProps = async () => {
  const precio = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR');
  const noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${api.APIkey}&language=es`);
  const eventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&token=${api.token}`);

  const resPrecio = await precio.json();
  const resNoticias = await noticias.json();
  const resEventos = await eventos.json();

  return {
    precioBitcoin: resPrecio.DISPLAY.BTC.EUR,
    noticias: resNoticias.articles,
    eventos: resEventos.events
  }
};

export default Index;
