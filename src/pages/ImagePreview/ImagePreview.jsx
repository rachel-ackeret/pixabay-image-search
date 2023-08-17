import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

import { getPixabayImage } from '../../apis/Pixabay'

const ImagePreview = () => {
    const [image, setImage] = useState(null)
    
    // The idea for using a new page to display each image, is so that it is easy to navigate
    // back to an image. Eventually a feature could be build out to save favorited images
    // so this could be an easy way to go back. 

    const { id } = useParams()

    useEffect(() => {
        getPixabayImage(id)
            .then((response) => {
                setImage(response)
            }
        )
    }, [id])

    const imageTags = image && image.tags.split(',');

    return (
        <div className="image-preview-display">
            <Link to={"/"}><button className="back-link">Back to Search</button></Link>
            {image ? 
                <>
                    <img src={image.largeImageURL} alt={image.tags} />
                    <p className="user-name">Created by:
                        <a 
                            href={`https://pixabay.com/users/${image.user}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @{image.user}
                        </a>
                    </p>
                    <div className="tags">
                        Tags: {imageTags.map((tag) => 
                            <p className="tag" key={tag}>{tag}</p>
                        )}
                    </div>
                </>
            : 
                <div>Loading...</div>
            }
        </div>
    )
}

export default ImagePreview