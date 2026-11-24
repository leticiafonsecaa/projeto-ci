import React, { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  // Variável nunca usada: gera um WARNING do ESLint (no-unused-vars).
  // Com CI=true, o build trata esse aviso como ERRO e falha.
  const mensagemNaoUsada = "Eu gero um warning!";

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: 50 }}>
      <h1>Projeto de Integração Contínua</h1>
      <p>Cliques: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default App;
