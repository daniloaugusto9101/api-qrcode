import qr from "qrcode-terminal";

async function handle(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log("QRCode gerado com sucesso!\n");
    console.log(qrcode);
  });
}

export default handle;
