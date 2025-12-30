/**
 * 
about.js
\src-JS\about.js
 */

console.log("\src-JS\about.js: Hi!")

let homePagePart = {
    "mainAboutID": "/src-HTML/mainAbout.html",
    "headerID2": "/src-HTML/header2A.html",
}


for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}
