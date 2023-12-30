const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const content = `
    <html>
      <head>
        <style>
          .box {
            width: 200px;
            height: 100px;
            background-color: #f0f0f0;
            box-shadow: 5px 5px 5px #888888;
          }
        </style>
      </head>
      <body>
        <div class="box"></div>
      </body>
    </html>
  `;
  
  await page.setContent(content);
  await page.pdf({ path: 'pdf_com_sombra_nodejs.pdf', format: 'A5' });

  await browser.close();
}

