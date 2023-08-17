import React from 'react'
import { Link } from 'react-router-dom'

const ImageTiles = ({ images }) => {
  return (
    <div className="image-tiles">
      {
        images.map((image) => {
          return (
            <Link key={image.id} to={`image/${image.id}`}>
              <img src={image.previewURL} alt={image.tags} />
            </Link>
          )
        }
      )}
    </div>
  )
}

export default ImageTiles