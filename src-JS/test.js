/**
 * 
test.js
\src-JS\test.js
 */

console.log("\src-JS\test.js: Hi!")

let homePagePart = {
    "mainTestID": "/src-HTML/mainTest.html",
    "subTitleC0ID": "/src-HTML/subTitle2T.html",
}


for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}
