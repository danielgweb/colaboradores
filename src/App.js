import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Colaboradores from "./components/Colaboradores/Colaboradores";

function App() {
  return (
      <Container className="p-5">
            {/*<Login />*/}
            <Colaboradores />
      </Container>
  );
}

export default App;
