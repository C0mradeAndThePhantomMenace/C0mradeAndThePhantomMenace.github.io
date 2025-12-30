/**
 * 
404.js
\src-JS\e404.js
 */

console.log("\src-JS\e404.js: Hi!")

let homePagePart = {
    "main404ID": "/src-HTML/mainE404.html",
    "headerID2": "/src-HTML/header2E404.html",
}


for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}
