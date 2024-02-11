import React from 'react'
import image from '../../assets/images/image.svg';

function GallerySummary() {
  return (
    <div className='gallery'>
        <div className="image">
          <img src={image} alt="No image available" />
        </div>
    </div>
  )
}

export default GallerySummary