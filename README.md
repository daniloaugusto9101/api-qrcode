# api-qrcode

## Descrição
Este projeto é uma API para gerar QR Codes diretamente no terminal. Ele utiliza a biblioteca `qrcode-terminal` para gerar os códigos QR e a biblioteca `prompt` para interagir com o usuário.

## Instalação
Para instalar as dependências do projeto, execute:
```bash
npm install
```

## Uso
Para iniciar a aplicação, execute:
```bash
npm run start:watch
```

### Fluxo de Uso
1. Ao iniciar a aplicação, você será solicitado a escolher uma ferramenta. Atualmente, a única opção disponível é gerar um QR Code.
2. Após escolher a ferramenta, você será solicitado a fornecer o link para o qual deseja gerar o QR Code e o tipo de QR Code (1 - Normal, 2 - Terminal).
3. O QR Code será gerado e exibido no terminal.

## Estrutura do Projeto
- `src/server.js`: Ponto de entrada da aplicação.
- `src/services/qr-code/create.js`: Função para criar o QR Code.
- `src/services/qr-code/handle.js`: Função para lidar com a geração do QR Code.
- `src/prompts/prompt-main.js`: Configuração do prompt principal.
- `src/prompts/prompt-qrcode.js`: Configuração do prompt para gerar QR Code.

## Dependências
- `qrcode-terminal`: Biblioteca para gerar QR Codes no terminal.
- `prompt`: Biblioteca para interagir com o usuário via terminal.

## Licença
Este projeto está licenciado sob a licença MIT.