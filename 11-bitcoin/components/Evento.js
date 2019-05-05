const Evento = ({evento}) => {
  const {name, url, description} = evento;

  let title = name.text;
  if (title && title.length > 100) {
    title = title.substr(0,100) + '...';
  }

  let desc = description.text;
  if (desc && desc.length > 250) {
    desc = desc.substr(0,250) + '...';
  }


  return (
    <a href={url} target="_blank" className="list-group-item active text-ligth mb-1">
      <h3 className="mb-3">{title}</h3>
      <p className="mb-1">{desc}</p>
    </a>
  );
};

export default Evento;
