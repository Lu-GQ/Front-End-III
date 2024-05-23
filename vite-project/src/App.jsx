import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Card from './Components/Card';

function App() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");

  const handleFormSubmit = (data) => {
    if (data) {
      setFormData(data);
      setError("");
    } else {
      setFormData(null);
      setError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Información</h1>
      <Form onSubmit={handleFormSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {formData && <Card input1={formData.input1} input2={formData.input2} />}
    </div>
  );
}

export default App;
