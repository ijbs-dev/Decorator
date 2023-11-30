"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SistemaSeguranca_1 = __importDefault(require("./SistemaSeguranca"));
const app = (0, express_1.default)();
app.get('/api/singleton', (req, res) => {
    res.send('Hello World!');
});
// GET http://localhost:8000/api/singleton
app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
const agenteSecreto = SistemaSeguranca_1.default.obterInstancia();
// Tentativa de acessar a Base Secreta com senha correta
const senhaCorreta = "senhaSuperSecreta123";
if (agenteSecreto.acessarBaseSecreta(senhaCorreta)) {
    console.log("Acesso concedido à Base Secreta!");
}
else {
    console.log("Senha incorreta. Acesso negado.");
}
// Tentativa de acessar a Base Secreta com senha incorreta
const senhaIncorreta = "senhaErrada456";
if (agenteSecreto.acessarBaseSecreta(senhaIncorreta)) {
    console.log("Acesso concedido à Base Secreta!");
}
else {
    console.log("Senha incorreta. Acesso negado.");
}
