import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as Excel from 'exceljs';

@Injectable()
export class GenerateReportsService {

  create(createGenerateReportDto: string) {
    var workbook = new Excel.Workbook();

    //Creating Sheet for that particular WorkBook
    var sheetName = 'Emails';
    var sheet = workbook.addWorksheet(sheetName);

    //Header must be in below format
    sheet.columns = [
      { key: 'text', header: 'text' },
      { key: 'date', header: 'date' },
      { key: 'from', header: 'from' },
      { key: 'to', header: 'to' },
    ];

    fs.readFile('./temp/allEmailsJson.json', 'utf-8', function (err, data) {
      var linhas = data.split(/\r?\n/);
      linhas.forEach(function (line: any) {
        if (line !== null && line !== undefined && line !== '') {
          line = JSON.parse(line);
          sheet.addRow({
            text: line.text,
            date: line.date,
            from: line.from,
            to: line.to,
          });
        }
      });
      
      //Finally creating XLSX file
      var fileName = './temp/emails_from_to_messages.xlsx';
      workbook.xlsx.writeFile(fileName).then(() => {
        console.log('foi');
      });
    });
    return 'This action adds a new generateReport';
  }
}
