// Objeto Schema de configuração do prompt
const promptMain = [
  {
    name: "select",
    description: "Escolha a ferramenta (1 - QRCODE)",
    pattern: /^[1]+$/,
    message: "Escolha inválida",
    required: true,
  },
];

export { promptMain };
