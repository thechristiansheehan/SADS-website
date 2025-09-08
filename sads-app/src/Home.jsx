import React from 'react';
import Modal from "./Modal";
import Banner from "./Banner";
import ducks1 from "./assets/images/ducks.jpg";
import ducks2 from "./assets/images/ducks2.jpg";
import ducks3 from "./assets/images/ducks3.jpg";
import ducks4 from "./assets/images/ducks4.jpg";

const Home = () => {
  return (
<div>
      <Banner />
      <br />
      <br />

<div style={{   display: "flex", 
  gap: "20px", 
  flexWrap: "wrap", 
  justifyContent: "center" }}>
<Modal
  trigger={
    <div
      style={{
        width: "200px",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#eaeaeaff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
    >
      <img src={ducks1} alt="duck card" style={{ width: "100%" }} />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>Duck</h4>
        <p style={{ margin: "4px 0 0", fontSize: "0.9rem", color: "#666" }}>
          quack
        </p>
      </div>
    </div>
  }
>
  <h2>This is a modal.</h2>
  Go SADS! but stay there...
  <br />
  <br />
  <img src={ducks1} style={{ width: "300px" }} alt="inside modal" />
</Modal>

<Modal
  trigger={
    <div
      style={{
        width: "200px",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#eaeaeaff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
    >
      <img src={ducks2} alt="duck card" style={{ width: "100%" }} />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>Duck 2</h4>
        <p style={{ margin: "4px 0 0", fontSize: "0.9rem", color: "#666" }}>
          quack quack
        </p>
      </div>
    </div>
  }
>
  <h2>This is a modal.</h2>
  Go SADS! but stay there...
  <br />
  <br />
  <img src={ducks2} style={{ width: "300px" }} alt="inside modal" />
</Modal>

<Modal
  trigger={
    <div
      style={{
        width: "200px",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#eaeaeaff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
    >
      <img src={ducks3} alt="duck card" style={{ width: "100%" }} />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>Duck 3</h4>
        <p style={{ margin: "4px 0 0", fontSize: "0.9rem", color: "#666" }}>
          quack quack quack
        </p>
      </div>
    </div>
  }
>
  <h2>This is a modal.</h2>
  Go SADS! but stay there...
  <br />
  <br />
  <img src={ducks3} style={{ width: "300px" }} alt="inside modal" />
</Modal>

<Modal
  trigger={
    <div
      style={{
        width: "200px",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#eaeaeaff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(85%)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
    >
      <img src={ducks4} alt="duck card" style={{ width: "100%" }} />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: 0 }}>Duck 4</h4>
        <p style={{ margin: "4px 0 0", fontSize: "0.9rem", color: "#666" }}>
          quack quack quack quack
        </p>
      </div>
    </div>
  }
>
  <h2>This is a modal.</h2>
  Go SADS! but stay there...
  <br />
  <br />
  <img src={ducks4} style={{ width: "300px" }} alt="inside modal" />
</Modal>
</div>
      <br />
   
</div>
  );
};

export default Home;
