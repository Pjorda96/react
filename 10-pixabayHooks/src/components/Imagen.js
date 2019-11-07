import React from 'react'

export default function Imagen({imagen}) {
  const {likes, largeImageURL, tags, views, previewURL} = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />

        <div className="card-body">
          <p className="card-text">{likes} Likes</p>
          <p className="card-text">{views} Vistas</p>
        </div>

        <div className="card-footer">
          <a
            href={largeImageURL}
            rel="noopener noreferrer"
            target="-blank"
            className="btn btn-primary btn-block"
          >
            Ver imagen
          </a>
        </div>
      </div>
    </div>
  )
}
