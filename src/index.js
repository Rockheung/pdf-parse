let fs = require('fs');
let PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

filePath = __dirname + "/../data/kook.pdf"

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
  // console.log(pdfData);
  // fs.writeFile(__dirname + "/../data/kook.json", JSON.stringify(pdfData, null, 2), (e)=>{
  //   console.log(e)
  // });
});
// 
// console.log("Now it shoud start at: ", __dirname)
// pdfParser.loadPDF(__dirname + "/../data/kook.pdf");

const getItBeauty = (filePath) => {
  return new Promise((res, rej)=>{
    fs.readFile(filePath, 'utf8', (err, pdfBuffer) =>{
      if (err) {
        rej(eff);
        return;
      }
      pdfParser.parseBuffer(pdfBuffer);
      res(pdfBuffer);
    })
  })
}

(async ()=>{
  console.log(await getItBeauty(filePath))
})()
