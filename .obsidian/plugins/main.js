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

const pathInRepoOfCode = (element, prefix="src/core/", postfix=".js")=>`${prefix}${element.toLowerCase().split(" ").join("-")}${postfix}`

const elementsForm = (element)=>`
### About [[${pathInRepoOfCode(element, "", ".js")}]] from Skriptonus core
> class of objects in [[Skriptonus]] relm framework ([repo of Skriptonus][skriptonus-repo])

describe item here

related info, etc.


> for **getting started** guide check out [[README]]

---

> relates with repository on Github: https://github.com/Sarverott/skriptonus/blob/master/${pathInRepoOfCode(element)}

[skriptonus-repo]: https://github.com/Sarverott/skriptonus#readme
`

const listElementForm = (listPrint)=>`
### List of core elements
> can be found in \`About Core > Fundamental Elements\`

${listPrint}

> for **getting started** guide check out [[README]]

`

for(var element of classTestList){
    const docAboutElement = path.resolve(
        import.meta.dirname,
        "../../About Core/Fundamental Elements",
        `${element}.md`
    );
    
    console.log(docAboutElement);
    
    if(!fs.existsSync(docAboutElement)){
        fs.writeFileSync(
            docAboutElement,
            elementsForm(element),
            {encoding:"utf8"}
        );
    }else{
        //fs.unlinkSync(docAboutElement);
    }

}

const docListClass = path.resolve(
    import.meta.dirname,
    "../../About Core/Main Idea/listed classes in this framework.md"
);

fs.writeFileSync(
    docListClass,
    listElementForm(classTestList.map((item)=>`- [[${item}]]`).join("\n")),
    {encoding:"utf8"}
);