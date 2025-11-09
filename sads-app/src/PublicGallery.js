import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

function PublicGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://newsadseditor-production.up.railway.app/images")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((err) => console.error(err));
  }, []);

  // Pass publicView={true}
  return <Gallery images={images} showDelete={false} publicView={true} />;
}

export default PublicGallery;
