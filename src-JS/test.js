/**
 * 
test.js
\src-JS\test.js
 */

console.log("\src-JS\test.js: Hi!")

let homePagePart = {
    "mainTestID": "/src-HTML/mainTest.html",
    "headerID2": "/src-HTML/header2T.html",
}


for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}
