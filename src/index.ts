import express from 'express';
import SistemaSeguranca from './SistemaSeguranca';

const app = express();

app.get('/api/singleton', (req, res) => {
  res.send('Hello World!');
});

// GET http://localhost:8000/api/singleton
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});

const agenteSecreto = SistemaSeguranca.obterInstancia();

// Tentativa de acessar a Base Secreta com senha correta
const senhaCorreta = "senhaSuperSecreta123";
if (agenteSecreto.acessarBaseSecreta(senhaCorreta)) {
  console.log("Acesso concedido à Base Secreta!");
} else {
  console.log("Senha incorreta. Acesso negado.");
}

// Tentativa de acessar a Base Secreta com senha incorreta
const senhaIncorreta = "senhaErrada456";
if (agenteSecreto.acessarBaseSecreta(senhaIncorreta)) {
  console.log("Acesso concedido à Base Secreta!");
} else {
  console.log("Senha incorreta. Acesso negado.");
}
