import React, { useState } from "react";
import "./Gallery.css";
const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img
            className="lightbox-image"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
