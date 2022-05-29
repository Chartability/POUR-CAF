const { exec } = require('child_process');

/*
    1. copy workbook as workbook-edited.md
    2. remove "(select to expand)"
    3. remove entire lines with "(select to read more)"
    4. convert workbook-edited.md to workbook.docx
    5. style docx pandoc -o custom-reference.docx --print-default-data-file reference.docx
    6. delete workbook-edited.md
*/

exec(
  `cp workbook.md ./workbook-edited.md && sed -i '' 's/(select to expand)//g' ./workbook-edited.md && sed -i '' '/(select to read more)/d' ./workbook-edited.md && pandoc -s workbook-edited.md -o Chartability_Worksheet_V2.docx --reference-doc=./includes/custom-reference.docx && rm workbook-edited.md`,
  (err, stdout, stderr) => {
        if (err) {
        // node couldn't execute the command
        console.log("uh oh!")
        return;
        }
        // ideally, we would actually turn every test into a table for the docx workbook... a trial for another day!
        console.log('Chartability_Worksheet_V2.docx was saved!')
    }
)