import NavBar from "./components/navbar.jsx";
import "./Home.css";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

const Resources = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      fetch("https://sadsapi-616938642091.europe-west1.run.app/images")
        .then((res) => res.json())
        .then((data) => setImages(data.images))
        .catch((err) => console.error(err));
    }, []);
  return (
    <div>
      <NavBar />
      <title>Resources</title>
      
      <div style={{ marginTop: "80px" }}></div>
<Gallery images={images} showDelete={false} publicView={true} />
<div style={{ marginTop: "30px" }}></div>
    </div>
  );
};

export default Resources;
