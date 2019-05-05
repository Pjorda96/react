import Evento from "./Evento";

const Eventos = ({eventos}) => (
  <div className="list-group">
    {Object.keys(eventos).map(key => (
      <Evento
        key={key}
        evento={eventos[key]}
      />
    ))}
  </div>
);

export default Eventos;
