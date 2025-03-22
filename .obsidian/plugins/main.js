import fs from "fs";
import path from "path";


var classTestList=[
    "Absolut Formula",
    "Architectonic Structure",
    "Authoritar Deity",
    "Being Existance",
    "Charm Procedure",
    "Cult Sect",
    "Curse Igniter",
    "Demonic Entity",
    "Divine Artifact",
    "Fatum Continuum",
    "Fundamental Information",
    "Gateway Kirk",
    "Glamour Expression",
    "Grimm Monastry",
    "Guarding Idol",
    "Inquisition Guild",
    "Liaison Stigma",
    "Luminocity Matter",
    "Lure Inurement",
    "Makers Chapel",
    "Obscurity Matter",
    "Pantheon Associacion",
    "Prophet Host",
    "Regular Person",
    "Sorcerers Tumb",
    "Spiritual Preacher",
    "Temple Union",
    "Worship Shrine"
]

const pathInRepoOfCode = (element)=>`core-fundations/${element.toLowerCase().split(" ").join("-")}.js`

const elementsForm = (element)=>`
# ${element}
> class of objects in [Skriptonus][skriptonus-repo] relm framework

describe item here

> [code of it][code-link]

[code-link]: https://github.com/Sarverott/skriptonus/blob/master/${pathInRepoOfCode(element)}
[skriptonus-repo]: https://github.com/Sarverott/skriptonus#readme
`


for(var element of classTestList){
    const docAboutElement = path.resolve(
        import.meta.dirname,
        "../../core-elements",
        `${element}.md`
    );
    console.log(docAboutElement);
    if(!fs.existsSync(docAboutElement))fs.writeFileSync(
        docAboutElement,
        elementsForm(element),
        {encoding:"utf8"}
    );
}