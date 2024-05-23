import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (input1.trim().length >= 3 && input2.length >= 6) {
      onSubmit({ input1: input1.trim(), input2 });
    } else {
      onSubmit(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Input 1:
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Input 2:
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
