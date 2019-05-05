const Noticia = ({noticia}) => {
  const {urlToImage, url, title, description, source} = noticia;

  return (
    <div className="col-md-6 col-12 mb-4">
      <div className="card">
        {
          urlToImage
            ? <div className="card-image">
              <img src={urlToImage} alt={title} className="card-img-top"/>
            </div>
            : <p className="text-center my-5">Imagen no disponible</p>
        }
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">{source.name}</p>
          <a href={url} target="_blank" className="btn btn-primary d-block">Leer noticia</a>
        </div>
      </div>
    </div>
  )
};

export default Noticia;
