const QRCode = require('qrcode')

class QrCodeGenerator{

    constructor() {
        // this.qrCode = QRCode
    }
    
    generateToTempFile(vCard) {
        if (vCard == undefined) {
            throw new Error("vCard is undefined")
        }

        // var tempFile =tempy.file({extension: 'png'})
        // var tempFile = new File(["foo"], "foo.png", {
        //     type: "text/plain",
        //   });
        // let tempFile = new File('C:\Users\mouau\Documents\Projects\NodeJs\nodejstp\js\generator\test.png', 'svg');
        // let path = tempFile.path()

        var x = document.createElement("CANVAS");
        var ctx = x.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20, 20, 150, 100);
        QRCode.toCanvas('test', {type: 'png'
          }, (error, x) => {
              if (error) {
                  console.log(error)
                throw new Error(error.message)
            }
             document.body.appendChild(canvas)
          })
    }
}

module.exports = QrCodeGenerator 