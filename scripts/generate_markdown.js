const json2md = require("json2md")
const fs = require('fs');

const rawdata = fs.readFileSync('includes/chartability.JSON');
const chartability = JSON.parse(rawdata);

const scaffolding = require("../includes/scaffolding")
const principles = scaffolding.principles
const siteHeading = scaffolding.siteHeading
const workbookHeading = scaffolding.workbookHeading
const startingContent = scaffolding.startingContent

let output = []
let workbookOutput = []

chartability.forEach(d => {
    const p = principles[d.Principle].heuristics
    p.push({"h3": `__${d["Test Name"]}__${(d["Critical"] === "Yes" ? " _(critical)_" : "")}` })
    p.push({"p": "<details><summary><i>(select to read more)</i></summary><div>"})
    p.push({"p": `_This heuristic is synthesized from ${d["Knowledge Type"]}_.`})
    p.push({"p": `__Description__: ${d["Description"]}`})
    if (d["Good Examples"]) {
        p.push({"p": `__Good example__: [${d["Good Examples"]}](${d["Good Examples"]})`})
    }
    if (d["Tools or Testing Method"]) {
        if (d["Tools or Testing Method"].length === 1) {
            p.push({"p": `__Example tool or testing method__: [${d["Tools or Testing Method"]}](${d["Tools or Testing Method"]})`})
        } else {
            p.push({"p": `__Example tools or testing method__: ${d["Tools or Testing Method"]}`})
        }
    }
    if (d["Resources"]) {
        const nonPlural = d["Knowledge Type"].substring(d["Knowledge Type"].length-1) === 's' ? d["Knowledge Type"].substring(0,d["Knowledge Type"].length-1) : d["Knowledge Type"]
        p.push({"p": `__Cited ${nonPlural}__: [${d["Resources"]}](${d["Resources"]})`})
    }
    if (d["Limitations and Caveats"]) {
        p.push({"p": `<details><summary><i>Notes (select to expand)</i></summary><p>${d["Limitations and Caveats"]}</p></details>`})
    }
    p.push({p: "<br>"})
    p.push({"p": "</div></details>"})
})

siteHeading.forEach(i => {
    output.push(i)
})

workbookHeading.forEach(i => {
    output.push(i)
    let upgradedItem = {}
    if (i.h2) {
        upgradedItem.h1 = i.h2
    } else if (i.h3) {
        upgradedItem.h2 = i.h3
    } else {
        upgradedItem = i
    }
    workbookOutput.push(upgradedItem)
})

startingContent.forEach(i => {
    output.push(i)
    workbookOutput.push(i)
})

const addPrinciples = (target) => {
    Object.keys(principles).forEach(principle => {
        target.push({h2: principle})
        target.push({p: principles[principle].description})
        principles[principle].heuristics.forEach(heuristic => {
            target.push(heuristic)
        })
    })
}

addPrinciples(output)
addPrinciples(workbookOutput)

const outputFiles = () => {
    fs.writeFile("README.md", json2md(output), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("README.md was saved!");
    }); 
    fs.writeFile("workbook.md", json2md(workbookOutput), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("workbook.md was saved!");
    }); 
}

outputFiles()
