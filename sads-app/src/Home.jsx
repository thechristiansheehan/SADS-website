import React from 'react';
import Modal from "./Modal";

const Home = () => {
  return (
    <p>
      <br />
      <br />
      This is the home page
      <br />
      <br />
      <Modal triggerText="Open Modal 1">
        <h2>This is a modal.</h2>
        <p>Go SADS! but stay there...</p>
      </Modal>

    </p>
  );
};

export default Home;
