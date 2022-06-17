# CONTRIBUTING

Anyone can contribute to Chartability! We have so many ways for folks to get involved (designers, researchers, technical folks, etc.), which you can find out more about in our [Getting Involved in Chartability discussion](https://github.com/Chartability/POUR-CAF/discussions/1) on github.

## Technical Contributions

Want to get involved in Chartability from a technical side of things? Get started below!

This repo has 1 main input:

[chartability.JSON](https://github.com/Chartability/POUR-CAF/blob/main/includes/chartability.JSON)

There are also supplemental input files:
1. DOCX: custom-reference.docx
2. HTML: footer, head, nav, script, and skip .html files
3. HTML: style.css
4. ALL files: [scaffolding.js](https://github.com/Chartability/POUR-CAF/blob/main/includes/scaffolding.js)

Our [build process](https://github.com/Chartability/POUR-CAF/blob/65f963f1627e2836fdf3c5a02c0a147ed1aebaa8/package.json#L7) is done on the files, in this order:
1. We generate the markdown from our JSON file (using json2md) in [generate_markdown.js](https://github.com/Chartability/POUR-CAF/blob/main/scripts/generate_markdown.js)
2. We convert the markdown to HTML and stitch the rest of our HTML input files into a single file in [generate_html.js](https://github.com/Chartability/POUR-CAF/blob/main/scripts/generate_html.js)
3. Lastly, we generate our Word Doc from the markdown file using pandoc in [generate_docx.js](https://github.com/Chartability/POUR-CAF/blob/main/scripts/generate_docx.js)

The scripts output the following 4 new files:
1. [index.html](https://github.com/Chartability/POUR-CAF/blob/main/index.html)
2. [README.md](https://github.com/Chartability/POUR-CAF/blob/main/README.md)
3. [workbook.md](https://github.com/Chartability/POUR-CAF/blob/main/workbook.md)
4. [Chartability_Worksheet_V2.docx](https://chartability.github.io/POUR-CAF/Chartability_Worksheet_V2.docx)

Files are automatically generated using the command: `yarn build` or `node run build` (you will need node/yarn to build our files as well as pandoc to generate a microsoft word doc).

Most issues with the file format or generation starts in the generate_markdown file (since both the docx and html files build off of this). Issues related to chartability's actual contents are all stored in the JSON file.
