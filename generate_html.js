const showdown = require("showdown")
const fs = require('fs');
const converter = new showdown.Converter();

const readme = fs.readFileSync('README.md', 'utf8');

const buildFile = () => {
    // more to add here, style files, etc
    const file = converter.makeHtml(readme)
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