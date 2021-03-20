import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const images = [
  'img/portfolio/01-large.jpg',
  'img/portfolio/02-large.jpg',
  'img/portfolio/03-large.jpg',
  'img/portfolio/04-large.jpg',
  'img/portfolio/05-large.jpg',
  'img/portfolio/06-large.jpg',
  'img/portfolio/07-large.jpg',
  'img/portfolio/08-large.jpg',
  'img/portfolio/09-large.jpg',
];
const projects = [
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem Ipsum',
];

export const Gallery = (props) => {
  const [isOpen , setIsOpen ] = useState(false);
  const [photoIndex , setPhotoIndex ] = useState(0);
  const handlePrev = () => {
    setPhotoIndex((photoIndex  + images.length - 1) % images.length);
  };
  const handleNext = () => {
    setPhotoIndex((photoIndex  + 1) % images.length);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const openSlideshow = (e, id) => {
    e.preventDefault();
    setPhotoIndex(id);
    setIsOpen(true);
  };
  
  const Images = (image, index) => {
    return(
      <div className='col-sm-6 col-md-4 col-lg-4'>
        <div className='portfolio-item'>
          <div className='hover-bg'>
            <div 
              className='hover-text' 
              onClick={(e) => openSlideshow(e, index)} 
            >
              <h4>{projects[index]}</h4>
            </div>
            <img
              key={index}
              src={`img/portfolio/0${index+1}-small.jpg`}
              className='img-responsive'
              alt='Project Title'
             />
          </div>
        </div>
      </div>
    )}

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-item'>
            {
              images.map((image, index) => (Images(image, index)))
            }
          </div>
          {isOpen && (
            <Lightbox
              key={photoIndex}
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={handleClose}
              onMovePrevRequest={handlePrev}
              onMoveNextRequest={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  )
}
