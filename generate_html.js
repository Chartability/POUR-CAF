const showdown = require("showdown")
const fs = require('fs');
const converter = new showdown.Converter();

const head = fs.readFileSync('includes/head.html', 'utf8');
const nav = fs.readFileSync('includes/nav.html', 'utf8');
const footer = fs.readFileSync('includes/footer.html', 'utf8');
const script = fs.readFileSync('includes/script.html', 'utf8');
const readme = fs.readFileSync('workbook.md', 'utf8');

const buildFile = () => {
    // more to add here, style files, etc
    let file = `<html lang="en-US">\n`
    file += head + `\n`
    file += `<body> \n`
    file += nav + `\n`
    file += `<main> \n`
    file += converter.makeHtml(readme)
    file += `</main> \n`
    file += footer + `\n`
    file += script + `\n`
    file += `</body></html>`
    return file
}

buildFile()

const outputFile = () => {
    fs.writeFile("index.html", buildFile(), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}

outputFile()