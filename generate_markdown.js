const json2md = require("json2md")
const fs = require('fs');

const rawdata = fs.readFileSync('chartability.JSON');
const chartability = JSON.parse(rawdata);
const roleHash = {
    "Test Name": "h2",
    "Critical": "p",
    "Description": "p",
    "Good Examples": "link",
    "Tools or Testing Method": "link",
    "Resources": "link",
    "Knowledge Type": "p",
    "Limitations and Caveats": "p"
}
const principles = {
    "Perceivable": {
        description: "User must be able to easily identify content using their senses: sight, sound, and touch.",
        heuristics: []
    },
    "Operable": {
        description: "All controls must be error-tolerant, discoverable, and multi-modal (not just mouse operable, but using keyboard, etc).",
        heuristics: []
    },
    "Understandable": {
        description: "Any information or data are presented without ambiguity, with clarity, and in a way that minimizes cognitive load.",
        heuristics: []
    },
    "Robust": {
        description: "The design is compliant with existing standards and works with the user’s compliant, assistive technologies of choice.",
        heuristics: []
    },
    "Compromising": {
        description: "(Understandable, yet Robust): Information flows must provide transparency, tolerance, and consideration for different ways that users with assistive technologies and disabilities will prefer to consume different information.",
        heuristics: []
    },
    "Assistive": {
        description: "(Understandable and Perceivable but labor-reducing): Interface must be intelligent and multi-sensory in a way that reduces the cognitive and functional labor required for use.",
        heuristics: []
    },
    "Flexible": {
        description: "(Perceivable and Operable, yet Robust): Design must respect user settings from user agents (browsers, operating systems, applications) and provide presentation and operation control.",
        heuristics: []
    }
}
let output = [
    { 
        h1: "Chartability" 
    },
    { 
        p: [
            "Chartability is a set of heuristics (testable questions) for ensuring that data visualizations, systems, and interfaces are accessible. Chartability is organized into principles with testable criteria and focused on creating an outcome that is an inclusive data experience for people with disabilities.",
            "To learn more about Chartability, check out the official [Chartability Website](https://chartability.fizz.studio/).",
            "This repository is intended to represent a basic document form of the Chartability Audit Workbook and the single-source of truth for the latest version of the workbook. Changes made to this repository will eventually be reflected in the workbook. In the section The Chartability Workbook below, the actual contents of the workbook can be found (with the name of each failure and its conditions under every principle)."
        ]
    },
    { 
        h2: "Issues and Contributing" 
    },
    { 
        p: "Any issues related to this workbook should be handled by this repository. Simply open a ticket! If you have any tickets related to the Chartability Website, please take them to [that repository](https://github.com/Chartability/site)." 
    },
    {
        p: "<hr><br>"
    },
    { 
        h2: "The Chartability Workbook" 
    },
    {
        p: [
            "This workbook is intended to serve as a lightweight, high-level audit for catching data experience* design failures related to accessibility. Note that CRITICAL tests in this workbook are not the “most important” tests (as every test is important in Chartability) but rather tests that are either: very common or expensive to remediate. For more on Chartability, see: [https://chartability.fizz.studio/](https://chartability.fizz.studio/)",
            "*A data experience (DX) could refer to a data visualization such as a chart, graph, or plot, a “bespoke” (highly customized) graphic based on data, a model, or an algorithm, or a data driven interface or system."
        ]
    },
    { 
        h3: "Method" 
    },
    {
        p: [
            "This workbook organizes tests into seven categories, four of which are based on broad accessibility principles: Perceivable, Operable, Understandable, and Robust (POUR). The last three extend Robust: Compromising, Assistive, and Flexible (CAF).",
            "An auditor should proceed through each test and determine whether the content fails or succeeds using techniques provided or their own methodology. The auditor should assume failure when tests are inconclusive and (if early in the design process) a proven pass to a future consideration has not yet been demonstrated."
        ]
    },
    { 
        h3: "Failures" 
    },
    {
        p: [
            "Unlike a compliance audit (which determines adherence to regulatory guidelines), Chartability is meant to identify design failures. Generally, Chartability approaches accessibility as a scale rather than a state: how accessible a DX is is determined by how few failures it contains. It should be assumed that even the absolute best DX may contain several failures, even after remediation. Note that Chartability should never be used in place of a compliance audit but always in tandem with it.",
            "Chartability’s insistence on a scale (instead of a state) of accessibility requires that designers and creators consider their choices carefully: they must be willing to argue that lack of scope, time, or research or perhaps a unique consideration led to a given failure. No failure should be left unconsidered."
        ]
    },
    { 
        h3: "Outcomes" 
    },
    {
        p: [
            "Chartability is a set of heuristic tests that not only highlights failures for remediation, but also encourages healthy design critique and critical design discourse related to accessibility. Because excellence in accessibility is never a finished state, the outcome of a Chartability audit is less about arriving at accessibility and more about working towards an accessible experience.",
            "A good audit is not about measuring sucess: a good audit finds evidence of risk and failure."
        ]
    },
    { 
        h3: "What are \"Critical\" heuristics?" 
    },
    {
        "p": [
            "Some tests are considered _critical_ by members of the community because they are prohibitively expensive to fix, common, produces signficant barriers, and/or affect many aspects of a data experience design or development.",
            "While all tests in Chartability are important, it is worth noting that Chartability's community has contributed to emphasizing the tests marked critical. All data experiences should strive to have 0 critical failures as a minimum while working toward 0 failures overall."
        ]
    },
    {
        p: "<hr><br>"
    },
    { 
        h2: "How do you use Chartability?" 
    },
    {
        p: [
            "There are a lot of different ways to perform an audit, and so there are also many different ways to use Chartability. Sometimes an audit is as casual as checking your work while you do it. And other times it is a big affair that involves teams of specialists and lawyers.",
            "Realistically, while a highly trained auditor may be able to casually evaluate an artifact in as little as 30 minutes or even hold heuristics in mind as they are doing their own creative work, those new to auditing may take anywhere between 2 and 8 hours to complete a full pass of Chartability. Professional audits, which can take weeks or months, often include multiple auditors and provide rigorous documentation and detailed recommendations for remediation, typically in the form of a report. Chartability is meant to serve both quick pass and deep dive styles of audits, so users are expected to leverage it as they see fit.",
            "Below we give an example of what might be a quick pass audit, using Chartability. This isn't super thorough, but a good way to check for most of the serious access barriers in charts and graphs."
        ]
    },
    { 
        h3: "Visual Testing" 
    },
    { 
        img: { 
            title: "Contrast testing.", 
            source: "/images/figure1.png", 
            alt: "A dropper tool is testing the contrast of a chart and then a new chart is shown with borders that pass contrast requirements." 
        }
    },
    {
        blockquote: "Figure 1: A low contrast chart (left) compared to a higher contrast version (right). A dropper tool is extracting the fill color of the bar and then a contrast ratio has been calculated. Note that the fill color is the same on both bars, but darker borders have been added to ensure the visualization passes contrast tests."
    },
    {
        p: "Checking for contrast is the most common critical failure across all of our audits (88% of audits failed this heuristic). In order to evaluate contrast, often a combination of automatic (code-driven) and manual tooling is performed. When manually auditing, practitioners typically use a dropper and a contrast calculator (Figure 1). Contrast is measured by finding adjacent colors that are intended to convey meaning or boundaries, and finding a ratio between them. Standards require a different minimum contrast for text (4.5:1) than geometries like marks in a chart (3:1). Most auditors find this to be one of the easiest tasks to perform, but techniques can be tricky to handle. Testing for contrast accomplishes 3 different heuristics in Chartability: ensuring text/geometries have contrast, interactive states for elements have enough contrast change, and the keyboard focus indicator is easy to distinguish."
    },
    {
        p: "Perceivable heuristics also include tests and tools for color vision deficiency and ensuring that color alone isn't used to communicate meaning (like the redundantly encoded textures in Figure 8). And another common, critical failure from Perceivable is text size. No text should be smaller than 12px/9pt in size."
    },
    { 
        img: { 
            title: "Keyboard navigation paths.", 
            source: "./images/figure2.png", 
            alt: "A chart with sequential keyboard navigation and a chart with keyboard navigation that can go up, down, left, and right."
        }
    },
    {
        blockquote: "Figure 2: Keyboard navigation paths on a stacked bar chart. The left shows a serial navigation example, typically just a default of rendering order. The right shows both groups (the stack of bars) and categories (the color/texture shared among bars across stacks) as dimensions to explore laterally or vertically."
    },
    {
        h3: "Keyboard Probing"
    },
    {
        p: "The next practice that most auditors should become comfortable with is using a keyboard to navigate and operate any functionality that is provided. Most assistive technologies, from screen readers to a variety of input devices (like switches, joysticks, sip and puffs, etc) use the keyboard api (or keyboard interface) to navigate content. If a data interface contains interactive elements (Figure 2, Figure 3), those elements (or their functionality) must be able to be reached and controlled using a keyboard alone. Auditors should be critical of how much work is involved in keyboard navigation, especially (Figure 7). All that is required to start is the auditor begins pressing the tab key to see if anything interactive comes into focus. Arrow keys, spacebar, enter, and escape may be used in some contexts. Generally, instructions or cues should always be provided."
    },
    { 
        img: { 
            title: "Interactive chart and dataset.", 
            source: "./images/figure3.png", 
            alt: "A chart is being selected by a mouse, updating a dataset that follows it."
        }
    },
    {
        blockquote: "Figure 3: A mouse cursor is selecting a bar (left, shown with a thick indication border) in a stacked bar chart to filter a dataset (on the right). A system alert (red box) notifies the user of their interaction result. This selection capability must also be provided for the keyboard interface and the alert must be announced to screen readers."
    },
    {
        p: "Using a keyboard provides an opportunity to evaluate many different heuristics: checking for multiple inputs (Figure 3), whether the data structure that is rendered is navigable according to its structure (Figure 2), and whether keyboard navigability across all elements in a data interface is even necessary (Figure 7)."
    },
    {
        h3: "Screen Reader Inspecting"
    },
    {
        p: "Closely related to keyboard testing is testing with a screen reader. Some things may work with a screen reader that do not with a keyboard (and vice versa), so both must be evaluated."
    },
    { 
        img: { 
            title: "Using a clear takeaway title.", 
            source: "./images/figure4.png", 
            alt: "A chart with an inaccessible title compared to a chart with a descriptive, takeaway title and caption."
        }
    },
    {
        blockquote: "Figure 4: Charts must have a visually available textual explanation provided that summarizes the outcome. \"Client Registration Chart\" for \"Product X\" (left) is inaccessible while \"New Product Launch a Success\" (right) gives a clear takeaway."
    },
    {
        p: "Screen readers, unlike more basic keyboard input devices, read out content that is textual (including non-visual textual information like alternative text). Using a screen reader to audit is generally the hardest skill to learn. Keeping this in mind, testing whether the meaningful text provided in a visual (such as in Figure 4) is accessible with a screen reader is the easiest and most basic test that auditors should first perform."
    },
    { 
        img: { 
            title: "Interactive chart semantics with a screen reader.", 
            source: "./images/figure5.png", 
            alt: "An interactive chart element that announces 'image' to a screen reader compared to an element that explains it is a toggle button and provides feedback when selected."
        }
    },
    {
        blockquote: "Figure 5: An interactive chart displaying only \"Image\" as semantic information with no feedback provided on selection. The robust semantics given to a screen reader, \"toggle button\" (middle) as well instant feedback, \"selected\" (right) are considered proper semantics for an interactive experience."
    },
    {
        p: "Next, all valuable information and functionality in a data experience should tested whether it is available to a screen reader. This includes the individual variables about a mark as well as whether that mark is interactive (Figure 5), whether status updates that reflect context change provide alerts (Figure 3), and whether summary textual information is provided about the whole chart (Figure 4) as well as statistically and visually important areas of that chart (Figure 7)."
    },
    { 
        img: { 
            title: "High and low levels of information.", 
            source: "./images/figure6.png", 
            alt: "A line chart and a table, both representing the same data but at different levels of information."
        }
    },
    {
        blockquote: "Figure 6: A line chart with a single line (left) and an accompanying data table (right). This line chart would not provide enough low-level information about each datapoint without the table provided. A table alone however would also be inaccessible. Providing both can satisfy conflicting accessibility needs for different audiences."
    },
    {
        h3: "Checking Cognitive Barriers"
    },
    {
        p: "First, auditing for cognitive barriers generally involves checking the reading level and clarity of all available text using analytical tools. But Chartability also requires that all charts have basic text provided that provides a visually-available textual description and takeaway (\autoref{fig:5}). This alone is one of the most important things to check for. In complex cases where a chart has a visual feature with an assumedly obvious takeaway, checking for annotations or textual callouts is important to help avoid interpretive issues (Figure 7)."
    },
    { 
        img: { 
            title: "Accessible annotations on a dense scatterplot.", 
            source: "./images/figure7.png", 
            alt: "A dense scatterplot being navigated point-by-point and a scatterplot that allows a user to navigate to an annotation on an outlier cluster."
        }
    },
    {
        blockquote: "Figure 7: A scatterplot with many points, where a single point within the chart can be accessed by a screen reader (left). Navigating this data piece by piece is unnecessarily tedious, so an annotation callout is provided to help the reader focus on an outlier cluster (right). The callout is being accessed by a screen reader, which is displaying the annotation’s summary as well."
    },
    {
        h3: "Evaluating Context"
    },
    {
        p: [
            "The final series of checks an auditor should make involve thinking about the overall work in a design (as it intersects with other considerations) as well as the larger technical context where the user is situated.",
            "Auditors should first try to change system settings (such as toggling high contrast modes) to see whether a data experience respects these settings (Figure 8), run automatic semantic evaluations as well as manually check for appropriate meaning (Figure 5), and check if dense or highly complex visuals have sonified, tactile, or textual summaries available (Figure 7). Auditors should also check whether system updates provide clear feedback textually (Figure 3) as well as checking if there are both high and low level representations of information available (Figure 6)."
        ]
    },
    { 
        img: { 
            title: "Automatic contrast adjustment.", 
            source: "./images/figure8.png", 
            alt: "A chart compared to a version of that chart conforming to Windows' high contrast mode."
        }
    },
    {
        blockquote: "Figure 8: A bar chart with categories (left) shown not conforming to Windows High Contrast White Mode. High contrast mode on Windows requires limiting color palettes, using only black or white for most elements (shown on the right)."
    },
    {
        p: "Auditors should be especially critical of static designs, such as those where styling and presentation cannot change (like using textures by default or not, eg. Figure 8), which are a high risk of compromising and adaptive failure."
    },
    {
        p: "<hr><br>"
    },
    { 
        h2: "Chartability's Principles and Heuristics" 
    },
    {
        p: `The following section contains Chartability's ${Object.keys(principles).length} principles and ${chartability.length} heuristics, ${chartability.filter(d => d.Critical === "Yes").length} of which are considered _critical_. Those new to chartability should try testing just the _critical_ heuristics first, and then move on to all of them.`
    }
]

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

Object.keys(principles).forEach(principle => {
    output.push({h2: principle})
    output.push({p: principles[principle].description})
    principles[principle].heuristics.forEach(heuristic => {
        output.push(heuristic)
    })
})

const outputFile = () => {
    fs.writeFile("README.md", json2md(output), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}

outputFile()