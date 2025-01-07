const promptQRCode = [
  {
    name: "link",
    description: "Informe o link para gerar o QRCode",
  },
  {
    name: "type",
    description: "Escolha o tipo de QRCode (1 - Normal, 2 - Terminal)",
    pattern: /^[1-2]+$/,
    message: "Escolha apena 1 ou 2 ",
    required: true,
  },
];

export default promptQRCode;
