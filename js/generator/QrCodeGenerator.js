const QRCode = require('qrcode');

class QrCodeGenerator{

    constructor() {
        this.qrCode = new QRCode();
    }

    generateToFile(vCard, path) {
        if (vCard == undefined) {
            throw new error("vCard is undefined")
        }
        this.qrCode.toFile(path, text, [options], [cb(error)])
    }
}