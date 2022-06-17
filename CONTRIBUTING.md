# CONTRIBUTING

Anyone can contribute to Chartability! We have so many ways for folks to get involved (designers, researchers, technical folks, etc.), which you can find out more about in our [Getting Involved in Chartability discussion](https://github.com/Chartability/POUR-CAF/discussions/1) on github.

## Technical Contributions

Want to get involved in Chartability from a technical side of things? Get started below!

This repo has 1 main input:

`chartability.JSON`

There are also supplemental input files:
1. DOCX: custom-reference.docx
2. HTML: footer, head, nav, script, and skip .html files
3. HTML: style.css
4. ALL files: [scaffolding.js](https://github.com/Chartability/POUR-CAF/blob/main/includes/scaffolding.js)

And this repo turns this data file into 4 new files:
1. [index.html](https://github.com/Chartability/POUR-CAF/blob/main/index.html)
2. [README.md](https://github.com/Chartability/POUR-CAF/blob/main/README.md)
3. [workbook.md](https://github.com/Chartability/POUR-CAF/blob/main/workbook.md)
4. [Chartability_Worksheet_V2.docx](https://chartability.github.io/POUR-CAF/Chartability_Worksheet_V2.docx)

Files are automatically generated using the command: `yarn build` or `node run build` (you will need node/yarn to build our files as well as pandoc to generate a microsoft word doc).
