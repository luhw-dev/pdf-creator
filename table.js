const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const content = `
    <html>
      <head>
        <style>
          .column {
            display: inline-block;
            margin-right: 20px;
          }
          table {
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
          .highlight-cell {
            background-color: #ffd700;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
          }
        </style>
      </head>
      <body>
        <h2>Exemplo de Tabelas em PDF com Colunas Separadas</h2>
        <div class="column">
          <table>
            <tr>
              <th>Nome</th>
              <td>João</td>
              <td>Maria</td>
              <td>Carlos</td>
            </tr>
            <tr>
              <th>Idade</th>
              <td>25</td>
              <td>30</td>
              <td>22</td>
            </tr>
          </table>
        </div>
        <div class="column">
          <table>
            <tr>
              <th>País</th>
              <td class="highlight-cell">Brasil</td>
              <td class="highlight-cell">Portugal</td>
              <td class="highlight-cell">Espanha</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `;
  
  await page.setContent(content);
  await page.pdf({ path: 'pdf_com_colunas_separadas_nodejs.pdf', format: 'A4' });

  await browser.close();
}

generatePDF();

